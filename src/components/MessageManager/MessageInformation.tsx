import Cancel01Icon from "../../logos/Cancel01Icon";
import Button from "../Button";
import FloatingCard from "../FloatingCard";
import Italic from "../Italic";
import Paragraph from "../Paragraph";
import Search from "../Search";
import UserBubble from "./UserBubble";

type Props = {
  onUserClick: (userId: string) => () => void;
  onClose: () => void;
};

function MessageInformation({ onUserClick, onClose }: Props) {
  return (
    <FloatingCard className="absolute flex flex-col bottom-0 right-16 min-w-80 gap-y-1">
      <div className="border-b-0.5 border-secondary p-2 flex justify-between items-center">
        <Paragraph>Connections</Paragraph>
        <Button onClick={onClose}>
          <Cancel01Icon />
        </Button>
      </div>
      <div className="p-2">
        <Search
          autoFocus
          placeholder="Search"
          onChange={() => {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="overflow-auto h-40 flex flex-col gap-y-1 px-2">
        <div className="flex flex-col gap-y-1">
          <Italic>Online</Italic>
          <div className="grid grid-cols-8  gap-y-2">
            <UserBubble onUserClick={onUserClick} userId="1" />
            <UserBubble onUserClick={onUserClick} userId="2" />
            <UserBubble onUserClick={onUserClick} userId="3" />
            <UserBubble onUserClick={onUserClick} userId="4" />
            <UserBubble onUserClick={onUserClick} userId="5" />
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <Italic>Connections</Italic>
          <div className="grid grid-cols-8 gap-y-2">
            <UserBubble onUserClick={onUserClick} userId="6" />
            <UserBubble onUserClick={onUserClick} userId="7" />
            <UserBubble onUserClick={onUserClick} userId="8" />
            <UserBubble onUserClick={onUserClick} userId="9" />
            <UserBubble onUserClick={onUserClick} userId="10" />
          </div>
        </div>
      </div>
    </FloatingCard>
  );
}

//forwardRef is used to pass the ref to the underlying DOM element
export default MessageInformation;
