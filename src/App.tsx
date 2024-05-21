// import "@aws-amplify/ui-react/styles.css";
import { signOut } from "aws-amplify/auth";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { setHasAuthenticated } = useAuth();
  async function handleSignout() {
    setHasAuthenticated(false);
    await signOut();
  }

  // const [messages, setMessages] = useState<Array<Schema["Message"]["type"]>>([]);

  // useEffect(() => {
  //     client.models.Message.list({
  //       filter: {
  //         roomId: {
  //           eq: "1",
  //         },
  //       },
  //     }).then((messages) => {
  //       setMessages(messages.data);
  //     }).catch((error) => {
  //       console.error("Error fetching messages:", error);
  //     });

  //   const sub = client.models.Message.onCreate({
  //     filter: {
  //       roomId: {
  //         eq: "1",
  //       },
  //     },
  //   }).subscribe({
  //     next: (msg) => {
  //       console.log("New message:");
  //       setMessages((prevMessages) => [...prevMessages, msg]);
  //     },
  //     error: (error) => {
  //       console.error("Error subscribing to messages:", error);
  //     },
  //   });
  //   return () => sub.unsubscribe();
  // }, []);

  // useEffect(() => {
  //   client.models.ConnectionRequest.onUpdate({
  //     filter: {
  //       receiverId: {
  //         eq: "1",
  //       },
  //     },
  //   }).subscribe({
  //     next: (msg) => {
  //       console.log("Connection request updated:");
  //       console.log(msg);
  //     },
  //     error: (error) => {
  //       console.error("Error subscribing to connection requests:", error);
  //     },
  //   });
  // }, []);

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen"
      data-theme="dark"
    >
        <div>
          <h1>My App</h1>
          <button onClick={handleSignout}>Sign Out</button>
        </div>
    </div>
  );
}

export default App;
