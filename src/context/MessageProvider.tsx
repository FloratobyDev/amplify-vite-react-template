/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Schema } from "../../amplify/data/resource";

type MessageProps = {
  currentMessagingUsers: Schema["User"]["type"][];
  setCurrentMessagingUsers: Dispatch<
    SetStateAction<Array<Schema["User"]["type"]>>
  >;
  onUserClick: (userInfo: Schema["User"]["type"]) => () => void;
};

type Props = {
  children: React.ReactNode;
};

export const MessageContext = createContext<MessageProps | undefined>(
  undefined
);

function MessageProvider({ children }: Props) {
  const [currentMessagingUsers, setCurrentMessagingUsers] = useState<
    Schema["User"]["type"][]
  >([]);

  const onUserClick = useCallback(
    (userId: Schema["User"]["type"]) => {
      return () => {
        if (currentMessagingUsers.some((user) => user.id === userId.id)) return;
        setCurrentMessagingUsers((prev) => {
          return [...prev, userId];
        });
      };
    },
    [currentMessagingUsers, setCurrentMessagingUsers]
  );

  const value: MessageProps = useMemo(
    () => ({ currentMessagingUsers, setCurrentMessagingUsers, onUserClick }),
    [currentMessagingUsers, onUserClick]
  );

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
}

export function useMessage() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
}

export default MessageProvider;
