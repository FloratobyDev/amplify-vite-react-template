// import "@aws-amplify/ui-react/styles.css";
import { signOut } from "aws-amplify/auth";
import { useAuth } from "./context/AuthProvider";
import { ChangeEvent, useState } from "react";
import Select from "./components/Select";
import Category from "./components/Category";
import Dropdown from "./components/Dropdown";
import ProfileLogo from "./logos/ProfileLogo";
import Paragraph from "./components/Paragraph";
import ProfileCard from "./components/ProfileCard";
import Search from "./components/Search";
import FloatingCard from "./components/FloatingCard";
import Italic from "./components/Italic";
import Message from "./components/Message";
import MessageManager from "./components/MessageManager";
import MessageProvider, { useMessage } from "./context/MessageProvider";
import CurrentMessageUsers from "./components/Message";
import Modal from "./components/Modal";
import Brand from "./components/Brand";
import Button from "./components/Button";
import Title from "./components/Title";

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

  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedValue, setSelectedValue] = useState<string>("");
  function handleSelect(value: string) {
    setSelectedValue(value);
  }

  const [activeLabel, setActiveLabel] = useState<string>("Category");
  const labels = [
    "Taiwanse",
    "Japanese",
    "Chinese",
    "Korean",
    "Thai",
    "Vietnamese",
    "Filipino",
    "Indian",
  ];

  function handleLabel(label: string) {
    return () => {
      setActiveLabel(label);
    };
  }

  const buttons = [
    {
      label: "Profile",
      onClick: () => console.log("Profile"),
    },
    {
      label: "Settings",
      onClick: () => console.log("Settings"),
    },
    {
      label: "Sign Out",
      onClick: () => console.log("Sign Out"),
    },
  ];

  return (
    <div className="h-screen" data-theme="dark">
      <div className="w-[60%] mx-auto py-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-1 gap-x-8 mr-16">
            <Brand />
            <Search
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                console.log(e.target.value)
              }
              placeholder="Search"
            />
          </div>
          <Paragraph bold>Michael Mushrush</Paragraph>
          <Dropdown jsxComponent={<ProfileLogo />} values={buttons} />
        </div>
        <div className="flex items-center w-full">
          {labels.map((label, index) => (
            <Category
              key={index}
              activeLabel={activeLabel}
              label={label}
              onClick={handleLabel}
            />
          ))}
        </div>
        <div className="flex gap-x-2">
          <Select
            options={options}
            onSelect={handleSelect}
            label="Country"
            selectedValue={selectedValue}
          />
          <Select
            options={options}
            onSelect={handleSelect}
            label="Education"
            selectedValue={selectedValue}
          />
        </div>
        <Title>
          Recommended
        </Title>
        <div className="grid grid-cols-4 gap-x-2 gap-y-4">
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProfileCard
            connectClick={() => console.log("Connect")}
            name="Name"
            overallRating="4.5"
            shortInfoList={["Info 1", "Info 2"]}
            shortDescription="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
        </div>
        <div className="flex items-center justify-center my-6">
          <Button onClick={() => {}}>
            <div className="px-4 py-1 bg-secondary rounded-4 hover:scale-[105%] transition-all">
              <Paragraph>Load more</Paragraph>
            </div>
          </Button>
        </div>
      </div>
      {/* <Select
        options={options}
        onSelect={handleSelect}
        label="Country"
        selectedValue={selectedValue}
      /> */}
      {/* <Dropdown jsxComponent={<ProfileLogo />} values={buttons} /> */}
      <MessageProvider>
        <CurrentMessageUsers />
        <MessageManager />
      </MessageProvider>
    </div>
  );
}

export default App;
