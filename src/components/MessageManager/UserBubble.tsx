import React from "react";

type Props = {
  onUserClick: (userId: string) => () => void;
  userId: string;
};

function UserBubble({ onUserClick, userId }: Props) {
  return (
    <div
      onClick={onUserClick(userId)}
      className="w-8 h-8 bg-secondary rounded-full cursor-pointer"
    />
  );
}

export default UserBubble;
