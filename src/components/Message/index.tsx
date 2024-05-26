import MessageInformation from "./MessageInformation";
import { useMessage } from "../../context/MessageProvider";

function CurrentMessageUsers() {
  const { currentMessagingUsers } = useMessage();

  
  
  return (
    <>
      {currentMessagingUsers.map((userInfo, idx) => {
        return <MessageInformation key={idx} userInfo={userInfo} />;
      })}
    </>
  );
}

export default CurrentMessageUsers;
