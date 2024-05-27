import { useEffect, useMemo, useRef, useState } from "react";
import FloatingCard from "./FloatingCard";
import useOutsideClick from "../hooks/useClickOutside";
import Paragraph from "./Paragraph";
import Cancel01Icon from "../logos/Cancel01Icon";
import ConnectionAcceptanceNotification from "./ConnectionAcceptanceNotification";
import ConnectionRequestNotification from "./ConnectionRequestNotification";
import { type Schema } from "../../amplify/data/resource";
import { useClient } from "../hooks/useClient";
import { useAuth } from "../context/AuthProvider";
import { v4 as uuidv4 } from "uuid";

type Props = {
  jsxComponent: React.ReactNode;
};

type BaseType = {
  type: string;
};

type ModifiedConnectionType = Schema["ConnectionReceived"]["type"] & BaseType;
type ModifiedRequestType = Schema["ConnectionRequest"]["type"] & BaseType;

type CombinationType = ModifiedConnectionType | ModifiedRequestType;

function NotificationDropdown({ jsxComponent }: Props) {
  const [hasSeen, setHasSeen] = useState(false);
  const [show, setShow] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const [connectedAcceptedNotification, setConnectedAcceptedNotification] =
    useState<Array<Schema["ConnectionReceived"]["type"]>>([]);
  const [connectionRequestNotification, setConnectionRequestNotification] =
    useState<Array<Schema["ConnectionRequest"]["type"]>>([]);
  const { client } = useClient();
  const { userInformation } = useAuth();

  useEffect(() => {
    if (!userInformation) return;

    async function fetchConnectionReceived() {
      client.models.ConnectionReceived.list({
        filter: {
          receiverId: {
            eq: userInformation?.id,
          },
        },
      })
        .then((connections) => {
          if (connections.data.length > 0) {
            setConnectedAcceptedNotification(connections.data);
            if (connections.data.some((connection) => !connection.hasSeen))
              setHasNotification(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching connection requests:", error);
        });
    }

    fetchConnectionReceived();

    async function fetchConnectionRequests() {
      client.models.ConnectionRequest.list({
        filter: {
          and: {
            senderId: {
              eq: userInformation?.id,
            },
            status: {
              ne: "pending",
            },
          },
        },
      })
        .then((requests) => {
          if (requests.data.length > 0) {
            setConnectionRequestNotification(requests.data);
            if (requests.data.some((request) => !request.hasSeen))
              setHasNotification(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching connection requests:", error);
        });
    }

    fetchConnectionRequests();

    const connectionReceivedSub = client.models.ConnectionReceived.onCreate({
      filter: {
        receiverId: {
          eq: userInformation?.id,
        },
      },
    }).subscribe({
      next: (msg) => {
        setConnectedAcceptedNotification((prevConnections) => [
          ...prevConnections,
          msg,
        ]);
        setHasNotification(true);
      },
      error: (error) => {
        console.error("Error subscribing to connection requests:", error);
      },
    });

    const connectionRequestSub = client.models.ConnectionRequest.onUpdate({
      filter: {
        senderId: {
          eq: userInformation?.id,
        },
      },
    }).subscribe({
      next: (msg) => {
        setConnectionRequestNotification((prevRequests) => [
          ...prevRequests,
          msg,
        ]);
        setHasNotification(true);
      },
      error: (error) => {
        console.error("Error subscribing to connection requests:", error);
      },
    });

    return () => {
      connectionRequestSub.unsubscribe();
      connectionReceivedSub.unsubscribe();
    };
  }, [
    client.models.ConnectionReceived,
    client.models.ConnectionRequest,
    userInformation,
  ]);

  const ref = useRef(null);
  useOutsideClick(ref, show, handleShow);

  async function handleShow() {
    setHasNotification(false);
    setShow(!show);
    if (!hasSeen) {
      console.log("Has not seen notifications yet");

      const connectedAcceptedNotifNotSeen =
        connectedAcceptedNotification.filter(
          (connection) => !connection.hasSeen
        );

      const connectionRequestNotifNotSeen =
        connectionRequestNotification.filter((request) => !request.hasSeen);

      const hasSeenUpdateList = connectedAcceptedNotifNotSeen.map(
        (connection) => {
          if (!userInformation?.id) return;
          return new Promise((resolve, reject) => {
            client.models.ConnectionReceived.update({
              senderId: userInformation?.id,
              receiverId: connection.receiverId,
              hasSeen: true,
            })
              .then(() => {
                resolve("Success");
              })
              .catch(() => {
                reject("Error updating connection received");
              });
          });
        }
      );

      const hasSeenRequestList = connectionRequestNotifNotSeen.map(
        (request) => {
          if (!userInformation?.id) return;
          return new Promise((resolve, reject) => {
            client.models.ConnectionRequest.update({
              senderId: userInformation?.id,
              receiverId: request.receiverId,
              hasSeen: true,
            })
              .then(() => {
                resolve("Success");
              })
              .catch(() => {
                reject("Error updating connection request");
              });
          });
        }
      );

      await Promise.all([...hasSeenUpdateList, ...hasSeenRequestList]).catch(
        (error) => {
          console.error("Error updating notifications:", error);
        }
      );
      setHasSeen(true);
    }
  }

  async function handleAcceptRequest(senderId: string) {
    if (!userInformation?.id) return;

    console.log("Sender ID:", senderId, "User ID:", userInformation?.id);

    const cUpdate = client.models.ConnectionRequest.update({
      senderId: senderId,
      receiverId: userInformation?.id,
      status: "accepted",
    });

    const cDelete = client.models.ConnectionReceived.delete({
      senderId: senderId,
      receiverId: userInformation?.id,
    });

    const response = await Promise.all([cUpdate, cDelete]).catch((error) => {
      console.error("Error accepting connection request:", error);
    });

    setConnectedAcceptedNotification((prevConnections) =>
      prevConnections.filter((connection) => connection.senderId !== senderId)
    );

    //create a new connection if update is successful

    const connectionToSender = await client.models.Connection.create({
      userId: userInformation?.id,
      connectionId: senderId,
    });

    const connectionToReceiver = await client.models.Connection.create({
      userId: senderId,
      connectionId: userInformation?.id,
    });

    const randomRoomId = uuidv4();

    client.models.Room.create({
      id: randomRoomId,
    })
      .then(async (room) => {
        console.log("Room created:", room);
        const senderRoomUser = await client.models.RoomUser.create({
          userId: userInformation?.id,
          roomId: randomRoomId,
        });

        const receiverRoomUser = await client.models.RoomUser.create({
          userId: senderId,
          roomId: randomRoomId,
        });

        console.log("RoomUser:", senderRoomUser, receiverRoomUser);
        console.log("Room:", room.data);
      })
      .catch((error) => {
        console.error("Error creating room:", error);
      });

    console.log("Connection:", connectionToSender, connectionToReceiver);
    console.log("Response:", response);
  }

  async function handleDeclineRequest(senderId: string) {
    if (!userInformation?.id) return;

    const cUpdate = client.models.ConnectionRequest.update({
      senderId: senderId,
      receiverId: userInformation?.id,
      status: "rejected",
    });

    const cDelete = client.models.ConnectionReceived.delete({
      senderId: senderId,
      receiverId: userInformation?.id,
    });

    const response = await Promise.all([cUpdate, cDelete]).catch((error) => {
      console.error("Error declining connection request:", error);
    });

    setConnectedAcceptedNotification((prevConnections) =>
      prevConnections.filter((connection) => connection.senderId !== senderId)
    );

    console.log("Response:", response);
  }

  const combinedNotifications: CombinationType[] = useMemo(() => {
    return [
      ...connectedAcceptedNotification.map((connection) => ({
        ...connection,
        type: "connection-acceptance",
      })),
      ...connectionRequestNotification.map((request) => ({
        ...request,
        type: "connection-request",
      })),
    ].sort((a, b) => {
      return (
        new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
      );
    });
  }, [connectedAcceptedNotification, connectionRequestNotification]);

  return (
    <div ref={ref} className="relative flex-col items-start gap-y-1">
      <button
        className="gap-x-2 py-1.5 px-2 rounded-4 cursor-pointer relative"
        onClick={async () => {
          handleShow();
        }}
      >
        {hasNotification && (
          <span className="h-1.5 w-1.5 absolute top-1 right-1 rounded-full bg-red-400" />
        )}
        {jsxComponent}
      </button>
      {show && (
        <FloatingCard className="absolute -bottom-22 right-0 min-w-64">
          <div className="h-64 overflow-auto">
            <div className="p-1.5 gap-y-1 flex flex-col overflow-auto h-full">
              <div className="p-1 border-b mb-1 flex justify-between items-center">
                <Paragraph bold>Notifications</Paragraph>
                <button
                  className="cursor-pointer hover:bg-secondary rounded-full p-0.5"
                  onClick={handleShow}
                >
                  <Cancel01Icon />
                </button>
              </div>
              {combinedNotifications.map((notification, index) => {
                if (notification.type === "connection-acceptance") {
                  return (
                    <ConnectionRequestNotification
                      key={index}
                      name={notification.name}
                      Accept={() => handleAcceptRequest(notification.senderId)}
                      Decline={() =>
                        handleDeclineRequest(notification.senderId)
                      }
                    />
                  );
                } else {
                  return (
                    <ConnectionAcceptanceNotification
                      key={index}
                      status={notification.status}
                      name={notification.name}
                    />
                  );
                }
              })}
              {combinedNotifications.length <= 0 && (
                <div className="flex items-center justify-center h-full">
                  <Paragraph className="text-center">
                    It's nothing but emptiness
                  </Paragraph>
                </div>
              )}
            </div>
          </div>
          <div className="text-center p-1.5 mt-4 border-t border-secondary">
            <Paragraph className="hover:underline underline-offset-1 cursor-pointer decoration-primary">
              See all notifications
            </Paragraph>
          </div>
        </FloatingCard>
      )}
    </div>
  );
}

export default NotificationDropdown;
