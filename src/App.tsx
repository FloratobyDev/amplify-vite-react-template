// import "@aws-amplify/ui-react/styles.css";
import { signOut } from "aws-amplify/auth";
import { useAuth } from "./context/AuthProvider";
import { useEffect, useState } from "react";
import Paragraph from "./components/Paragraph";
import ProfileCard from "./components/ProfileCard";
import MessageManager from "./components/MessageManager";
import MessageProvider from "./context/MessageProvider";
import CurrentMessageUsers from "./components/Message";
import Button from "./components/Button";
import Title from "./components/Title";
import classNames from "classnames";
import AppNavbar from "./page-parts/AppNavbar";
import AppProfileSetup from "./page-parts/AppProfileSetup";
import AppCategoryList from "./page-parts/AppCategoryList";
import AppDropdownList from "./page-parts/AppDropdownList";
import { CategoryListType } from "./types";
import AppProfileList from "./page-parts/AppProfileList";
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../amplify/data/resource'


const client = generateClient<Schema>();

function App() {

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

  
  const [feedFilters, setFeedFilters] = useState<CategoryListType>({
    category: "",
    interest: "",
    country: "",
    age: "",
  });

  console.log("feedFilters", feedFilters);

  const [dropdownOptions, setDropdownOptions] = useState({
    country: ["Country 1", "Country 2", "Country 3"],
    age: ["Age 1", "Age 2", "Age 3"],
    interest: ["Interest 1", "Interest 2", "Interest 3"],
    race: ["Race1", "Race2", "Race3"],
  });

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
      setFeedFilters((prev) => {
        return { ...prev, category: label };
      });
    };
  }

  const [closeProfile, setCloseProfile] = useState<boolean>(
    localStorage.getItem("closeProfile") === "true" ? true : false
  );

  useEffect(() => {
    if (closeProfile) {
      console.log("Close Profile Setup");
    }
  }, [closeProfile]);

  const divClasses = classNames("mx-auto py-8 flex flex-col gap-y-4", {
    "w-[60%]": closeProfile,
    "w-[70%]": !closeProfile,
  });

  const [profiles, setProfiles] = useState([
    {
      name: "John Doe",
      overallRating: "4.5",
      shortInfoList: ["Software Engineer", "JavaScript Expert"],
      shortDescription:
        "John Doe is a seasoned software engineer with over 10 years of experience in web development. He specializes in JavaScript and has worked on numerous high-profile projects.",
    },
    {
      name: "Jane Smith",
      overallRating: "4.7",
      shortInfoList: ["Graphic Designer", "Freelancer"],
      shortDescription:
        "Jane Smith is a talented graphic designer with a keen eye for detail. She has been freelancing for over 5 years, creating stunning visuals for various clients.",
    },
    {
      name: "Alice Johnson",
      overallRating: "4.6",
      shortInfoList: ["Data Scientist", "Machine Learning Enthusiast"],
      shortDescription:
        "Alice Johnson is a data scientist who loves uncovering insights from data. She has a strong background in machine learning and data analysis, making her a valuable asset to any data-driven project.",
    },
    {
      name: "Robert Brown",
      overallRating: "4.8",
      shortInfoList: ["Project Manager", "Agile Certified"],
      shortDescription:
        "Robert Brown is an experienced project manager with a passion for agile methodologies. He has successfully led multiple teams to deliver projects on time and within budget.",
    },
    {
      name: "Emily Davis",
      overallRating: "4.9",
      shortInfoList: ["UX/UI Designer", "User Experience Advocate"],
      shortDescription:
        "Emily Davis is a UX/UI designer dedicated to creating intuitive and enjoyable user experiences. Her designs are user-centric, making her a favorite among clients and users alike.",
    },
    {
      name: "Michael Wilson",
      overallRating: "4.4",
      shortInfoList: ["Digital Marketer", "SEO Specialist"],
      shortDescription:
        "Michael Wilson is a digital marketer with expertise in SEO and content marketing. He has helped numerous companies improve their online presence and drive organic traffic.",
    },
    {
      name: "Sarah Lee",
      overallRating: "4.7",
      shortInfoList: ["Content Writer", "Blogger"],
      shortDescription:
        "Sarah Lee is a prolific content writer and blogger with a passion for storytelling. She has a knack for creating engaging and informative content that resonates with readers.",
    },
    {
      name: "David Martinez",
      overallRating: "4.6",
      shortInfoList: ["Cybersecurity Expert", "Ethical Hacker"],
      shortDescription:
        "David Martinez is a cybersecurity expert specializing in ethical hacking and penetration testing. He has helped organizations strengthen their security posture and protect against cyber threats.",
    },
    {
      name: "Laura Gonzalez",
      overallRating: "4.8",
      shortInfoList: ["Product Manager", "Tech Enthusiast"],
      shortDescription:
        "Laura Gonzalez is a product manager with a strong technical background. She excels at bridging the gap between technical teams and business stakeholders to deliver successful products.",
    },
    {
      name: "James Anderson",
      overallRating: "4.5",
      shortInfoList: ["Financial Analyst", "Investment Advisor"],
      shortDescription:
        "James Anderson is a financial analyst with a deep understanding of market trends and investment strategies. He provides valuable insights and advice to help clients make informed financial decisions.",
    },
    {
      name: "Karen Moore",
      overallRating: "4.7",
      shortInfoList: ["HR Specialist", "Recruitment Expert"],
      shortDescription:
        "Karen Moore is an HR specialist with extensive experience in recruitment and talent management. She is dedicated to finding the right talent and fostering a positive work environment.",
    },
    {
      name: "Steven Thomas",
      overallRating: "4.6",
      shortInfoList: ["Architect", "Urban Planner"],
      shortDescription:
        "Steven Thomas is an architect and urban planner with a vision for sustainable and innovative design. His projects are known for their functionality and aesthetic appeal.",
    },
    {
      name: "Rachel Jackson",
      overallRating: "4.9",
      shortInfoList: ["Health Coach", "Nutritionist"],
      shortDescription:
        "Rachel Jackson is a health coach and nutritionist committed to helping people achieve their wellness goals. She provides personalized guidance on nutrition, fitness, and lifestyle changes.",
    },
    {
      name: "Chris White",
      overallRating: "4.4",
      shortInfoList: ["Mechanical Engineer", "Inventor"],
      shortDescription:
        "Chris White is a mechanical engineer and inventor with a passion for creating innovative solutions. His inventions have received multiple patents and industry recognition.",
    },
    {
      name: "Jessica Harris",
      overallRating: "4.7",
      shortInfoList: ["Teacher", "Education Advocate"],
      shortDescription:
        "Jessica Harris is a dedicated teacher and education advocate who strives to create an engaging and inclusive learning environment for her students. She has been recognized for her innovative teaching methods.",
    },
    {
      name: "Daniel Martin",
      overallRating: "4.6",
      shortInfoList: ["Photographer", "Visual Artist"],
      shortDescription:
        "Daniel Martin is a professional photographer and visual artist known for his stunning landscapes and portrait photography. His work has been featured in numerous galleries and publications.",
    },
    {
      name: "Sophia Turner",
      overallRating: "4.8",
      shortInfoList: ["Entrepreneur", "Business Consultant"],
      shortDescription:
        "Sophia Turner is an entrepreneur and business consultant with a track record of successfully launching and scaling businesses. She provides strategic advice to help companies grow and thrive.",
    },
    {
      name: "Matthew Roberts",
      overallRating: "4.5",
      shortInfoList: ["Chef", "Culinary Expert"],
      shortDescription:
        "Matthew Roberts is a renowned chef and culinary expert with a passion for creating delectable dishes. He has worked in some of the top restaurants and has been featured on various cooking shows.",
    },
    {
      name: "Olivia Thompson",
      overallRating: "4.7",
      shortInfoList: ["Fashion Designer", "Stylist"],
      shortDescription:
        "Olivia Thompson is a fashion designer and stylist known for her innovative designs and keen fashion sense. She has styled numerous celebrities and her collections are highly sought after.",
    },
    {
      name: "Lucas Martinez",
      overallRating: "4.6",
      shortInfoList: ["Mobile App Developer", "Tech Innovator"],
      shortDescription:
        "Lucas Martinez is a mobile app developer and tech innovator with a passion for creating user-friendly and impactful applications. His apps have won several awards and have a large user base.",
    },
  ]);

  return (
    <div className="h-screen">
      <AppNavbar />
      <div className={divClasses}>
        <div className="flex gap-y-4 gap-x-8">
          <AppProfileSetup
            closeProfile={closeProfile}
            setCloseProfile={setCloseProfile}
          />
          <div className="flex flex-col gap-y-4 flex-1">
            <AppCategoryList
              labels={labels}
              activeLabel={feedFilters.category}
              handleLabel={handleLabel}
            />
            <AppDropdownList
              feedFilters={feedFilters}
              setFeedFilters={setFeedFilters}
              dropdownOptions={dropdownOptions}
            />
            <Title>Recommended</Title>
            <AppProfileList profiles={profiles} />
            <div className="flex items-center justify-center my-6">
              <Button onClick={() => {}}>
                <div className="px-4 py-1 bg-secondary rounded-4 hover:scale-[105%] transition-all">
                  <Paragraph>Load more</Paragraph>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MessageProvider>
        <CurrentMessageUsers />
        <MessageManager />
      </MessageProvider>
    </div>
  );
}

export default App;
