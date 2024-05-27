import { useRef, useState } from "react";
import MessageInformation from "./MessageInformation";
import useOutsideClick from "../../hooks/useClickOutside";
import { useMessage } from "../../context/MessageProvider";
import { Schema } from "../../../amplify/data/resource";
import BubbleChatIcon from "../../logos/BubbleChatIcon";

function MessageManager() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { currentMessagingUsers, setCurrentMessagingUsers } = useMessage();

  function onUserClick(userInfo: Schema["User"]["type"]) {
    return () => {
      if (currentMessagingUsers.some((user) => user.id === userInfo.id)) return;
      setCurrentMessagingUsers((prev) => {
        return [...prev, userInfo];
      });
    };
  }

  useOutsideClick(ref, show, handleShow);

  function handleShow() {
    setShow(!show);
  }
  return (
    <div className="relative flex" ref={ref}>
      {show && (
        <MessageInformation onClose={handleShow} onUserClick={onUserClick} />
      )}
      <div
        onClick={handleShow}
        role="button"
        className="h-12 w-12 min-w-12 rounded-full bg-secondary flex items-center justify-center"
      >
        <BubbleChatIcon />
      </div>
    </div>
  );
}

export default MessageManager;
