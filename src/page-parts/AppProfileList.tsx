import { useEffect, useState } from "react";
import { Schema } from "../../amplify/data/resource";
import ProfileCard from "../components/ProfileCard";
import { ProfileType } from "../types";
import { useAuth } from "../context/AuthProvider";
import { useClient } from "../hooks/useClient";

type Props = {
  profiles: Array<Schema["User"]["type"]>;
};

type PendingType = {
  id: string;
  connectionStatus: string;
};

function AppProfileList({ profiles }: Props) {
  const { client } = useClient();
  const [users, setUsers] = useState<
    Array<ProfileType>
  >([]);
  const { userInformation } = useAuth();
  const [currentConnections, setCurrentConnections] = useState<
    Array<Schema["Connection"]["type"]>
  >([]);

  useEffect(() => {
    async function fetchConnectionRequests(receiverId: string) {
      return await new Promise((resolve) => {
        userInformation?.connectionRequests().then((connectionResponse) => {
          const userData = connectionResponse.data.find(
            (request) => request.receiverId === receiverId
          );
          if (userData) {
            resolve({
              id: receiverId,
              connectionStatus: userData.status,
            });
          } else {
            resolve({
              id: receiverId,
              connectionStatus: "connect",
            });
          }
        });
      });
    }

    const newProfiles: ProfileType[] = [];
    const pendingValues: PendingType[] = [];

    async function filterProfiles() {
      let cns: Array<Schema["Connection"]["type"]> = [];

      if (currentConnections) {
        cns = currentConnections;
      } else {
        const connections = await userInformation?.connections();
        if (connections?.data) {
          cns = connections.data;
          setCurrentConnections(connections.data);
        }
      }

      const filteredConnections = profiles.filter(
        (e) =>
          !cns.some(
            (c) => c.connectionId === e.id || userInformation?.id === e.id
          )
      );

      const userWithPendingStatus = filteredConnections.map((e) =>
        fetchConnectionRequests(e.id)
      );

      await Promise.all(userWithPendingStatus).then((values) => {
        pendingValues.push(...(values as PendingType[]));
      });

      filteredConnections.map((user) => {
        const shortInfoList = [
          user.gender || "",
          String(user.age) || "",
          user.race || "",
        ];
        const shortDescription = user.aboutMe || "No Description";
        const name = user.fullName || "No Name";
        const overallRating = "5.0";

        const connectionStatus = pendingValues.find(
          (e) => e.id === user.id
        )?.connectionStatus;

        newProfiles.push({
          id: user.id,
          connectionStatus: connectionStatus || "none",
          name,
          overallRating,
          shortInfoList,
          shortDescription,
          user: user,
        });
      });

      setUsers(newProfiles);
    }
    filterProfiles();
  }, [
    client.models.ConnectionRequest,
    client.models.User,
    currentConnections,
    profiles,
    userInformation,
    userInformation?.id,
  ]);

  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-4">
      {users.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}

export default AppProfileList;
