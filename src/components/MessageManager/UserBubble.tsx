import { useEffect, useState } from "react";
import { Schema } from "../../../amplify/data/resource";
import { getUrl } from "aws-amplify/storage";

type Props = {
  onUserClick: (value: Schema["User"]["type"]) => () => void;
  userInfo: Schema["User"]["type"];
};

function UserBubble({ onUserClick, userInfo }: Props) {
  const [image, setImage] = useState("");

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

  return (
    <div
      onClick={onUserClick(userInfo)}
      className="w-8 h-8 bg-secondary rounded-full cursor-pointer"
    >
      <img
        src={image || ""}
        alt="user-profile-pic"
        className="w-8 h-8 rounded-full"
      />
    </div>
  );
}

export default UserBubble;
