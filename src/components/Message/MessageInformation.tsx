import { useRef, useState, MouseEvent, useEffect } from "react";
import ArrowUpRight01Icon from "../../logos/ArrowUpRight01Icon";
import Cancel01Icon from "../../logos/Cancel01Icon";
import Navigation03Icon from "../../logos/Navigation03Icon";
import Button from "../Button";
import FloatingCard from "../FloatingCard";
import Paragraph from "../Paragraph";
import Search from "../Search";
import useOutsideClick from "../../hooks/useClickOutside";
import { useMessage } from "../../context/MessageProvider";
import classNames from "classnames";
import SubParagraph from "../SubParagraph";
import Modal from "../Modal";
import { Schema } from "../../../amplify/data/resource";
import { useAuth } from "../../context/AuthProvider";
import { useClient } from "../../hooks/useClient";
import dayjs from "dayjs";
import { getUrl } from "aws-amplify/storage";

type Props = {
  userInfo: Schema["User"]["type"];
};

type MessageType = {
  senderId: string;
  content: string;
  createdAt: string;
};

function MessageInformation({ userInfo }: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("");
  const [hasMessageAlert, setHasMessageAlert] = useState(false);
  const [sentMessages, setSentMessages] = useState<Array<MessageType>>([]);
  const { setCurrentMessagingUsers } = useMessage();
  const { userInformation } = useAuth();
  const { client } = useClient();
  const [roomId, setRoomId] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  const currentPostion = useRef(0);
  const [image, setImage] = useState("");

  function handleMessage(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    const fetchImage = async () => {
      if (!userInfo || !userInfo.profilePictureUrl) return;

      const url = await getUrl({
        path: userInfo?.profilePictureUrl || "",
      });
      setImage(url.url.toString());
    };

    fetchImage();
  }, [userInfo]);

  async function handleSubmitMessage() {
    if (!userInformation) return;
    client.models.Message.create({
      roomId: roomId,
      senderId: userInformation.id,
      content: message,
    })
      .then(() => {
        setSentMessages((prev) => [
          ...prev,
          {
            senderId: userInformation.id,
            content: message,
            createdAt: new Date().toISOString(),
          },
        ]);
        setMessage("");
        currentPostion.current = divRef.current?.scrollHeight || 0;
      })
      .catch((error) => {
        setMessage("");
        console.error("Error sending message:", error);
      });
  }

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTo(
        currentPostion.current,
        divRef.current.scrollHeight
      );
    }
  }, [sentMessages, show]);

  useEffect(() => {
    const messageSub = client.models.Message.onCreate({
      filter: {
        and: {
          roomId: {
            eq: roomId,
          },
          senderId: {
            eq: userInfo.id,
          },
        },
      },
    }).subscribe({
      next: (msg) => {
        setSentMessages((prev) => [...prev, msg]);
        setHasMessageAlert(true);
        currentPostion.current = divRef.current?.scrollHeight || 0;
      },
      error: (error) => {
        console.error("Error subscribing to messages:", error);
      },
    });

    return () => messageSub.unsubscribe();
  }, [client.models.Message, roomId, userInfo.id]);

  useEffect(() => {
    async function getRoomMessages() {
      if (!userInfo.rooms || userInformation === undefined) return;

      const connectionRooms = userInfo.rooms();
      const userRooms = userInformation.rooms();
      await Promise.all([connectionRooms, userRooms])
        .then((values) => {
          const commonRoom = values[0].data.filter((room) => {
            return values[1].data.some(
              (userRoom) => userRoom.roomId === room.roomId
            );
          });
          if (commonRoom.length === 0) return;
          setRoomId(commonRoom[0].roomId);
          commonRoom[0]
            .room()
            .then((room) => {
              room.data
                ?.messages()
                .then((messages) => {
                  const messageData = messages.data.map((message) => {
                    return {
                      senderId: message.senderId,
                      content: message.content,
                      createdAt: message.createdAt,
                    };
                  });
                  messageData.sort((a, b) => {
                    return (
                      new Date(a.createdAt).getTime() -
                      new Date(b.createdAt).getTime()
                    );
                  });
                  setSentMessages(messageData);
                })
                .catch((error) => {
                  console.error("Error fetching messages:", error);
                });
            })
            .catch((error) => {
              console.error("Error fetching room:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching rooms:", error);
        });
    }
    getRoomMessages();
  }, [client.models.RoomUser, userInfo, userInformation]);

  useOutsideClick(ref, show, handleShow);

  function handleShow() {
    setHasMessageAlert(false);
    setShow(!show);
  }

  function handleCloseMessage(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    setCurrentMessagingUsers((prev) => {
      const newUsers = prev.filter((user) => user.id !== userInfo.id);
      return newUsers;
    });
  }

  const [showClose, setShowClose] = useState(false);

  function handleShowClose() {
    setShowClose(true);
  }

  function handleHideClose() {
    setShowClose(false);
  }

  const closeClasses = classNames(
    "absolute -top-1 -right-1 h-5 w-5 rounded-full border border-secondary p-0.5 items-center justify-center bg-white hover:scale-[110%] transtion-all",
    {
      hidden: !showClose,
      flex: showClose,
    }
  );

  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  function openModalFromButton() {
    setShow(false);
    setShowModal(true);
  }

  return (
    <>
      <Modal isOpen={showModal}>
        <div className="bg-secondary rounded-4 p-2">
          <Button onClick={handleModal}>
            <Cancel01Icon />
          </Button>
        </div>
      </Modal>
      <div className="relative flex" ref={ref}>
        {show && (
          <FloatingCard
            onMouseEnter={() => {
              if (hasMessageAlert) setHasMessageAlert(false);
            }}
            className="absolute flex flex-col bottom-0 right-16 min-w-[254px]"
          >
            <div className="flex justify-between items-center p-2">
              <Paragraph>{userInfo.fullName}</Paragraph>
              <div className="flex gap-x-0.5">
                <Button onClick={openModalFromButton}>
                  <ArrowUpRight01Icon />
                </Button>
                <Button onClick={handleShow}>
                  <Cancel01Icon />
                </Button>
              </div>
            </div>
            <div
              ref={divRef}
              className="h-[216px] border-y-0.5 border-secondary overflow-auto"
            >
              <div className="p-2 flex flex-col gap-y-1">
                {sentMessages.map((message, index) => {
                  const messageClasses = classNames({
                    "flex flex-col items-end":
                      message.senderId === userInformation?.id,
                  });
                  return (
                    <div key={index} className={messageClasses}>
                      <div className="bg-secondary rounded-4 p-2 w-[80%]">
                        <Paragraph>{message.content}</Paragraph>
                      </div>
                      <SubParagraph>
                        {dayjs(message.createdAt).format("hh:mm:ss")}
                      </SubParagraph>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-x-1 justify-between p-1">
              <Search
                autoFocus
                placeholder="Type a message..."
                onChange={handleMessage}
                value={message}
              />
              <Button onClick={handleSubmitMessage}>
                <div className="px-2 border border-secondary rounded-4 flex items-center justify-center h-full">
                  <Navigation03Icon />
                </div>
              </Button>
            </div>
          </FloatingCard>
        )}
        <div
          onMouseEnter={handleShowClose}
          onMouseLeave={handleHideClose}
          onClick={handleShow}
          role="button"
          className="h-12 w-12 min-w-12 rounded-full bg-secondary relative flex items-center justify-center"
        >
          {hasMessageAlert && (
            <div className="h-4 w-4 bg-red-400 rounded-full absolute m-auto z-10" />
          )}
          <div onClick={handleCloseMessage} className={closeClasses}>
            <Cancel01Icon />
          </div>
          <img src={image} alt="connection-profile-image" />
        </div>
      </div>
    </>
  );
}

export default MessageInformation;
