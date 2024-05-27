/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";
import SegmentedControl from "../components/SegmentedControl";
import BrandLogo from "../logos/BrandLogo";
import Paragraph from "../components/Paragraph";

type Props = {
  children: React.ReactNode;
};

const client = generateClient<Schema>();

type ValueType = {
  setHasAuthenticated: (value: boolean) => void;
  userInformation: Schema["User"]["type"] | undefined;
  setUserInformation: (value: Schema["User"]["type"] | undefined) => void;
};

export const AuthContext = createContext<ValueType | undefined>(undefined);

export default function AuthProvider({ children }: Props) {
  const [hasAuthenticated, setHasAuthenticated] = useState(false);
  const [hasUserInfo, setHasUserInfo] = useState(false);
  const [userInformation, setUserInformation] = useState<
    Schema["User"]["type"] | undefined
  >(undefined);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    async function checkUser() {
      if (!hasAuthenticated && !hasUserInfo) {
        console.log("getting current user");
        getCurrentUser()
          .then(async (response) => {
            client.models.User.get({
              id: response.username,
            })
              .then((user) => {
                setUserInformation(user.data as Schema["User"]["type"]);
                setHasUserInfo(true);
                setHasAuthenticated(true);
              })
              .catch((error) => {
                console.log("error", error);
              });
          })
          .catch(() => {
            setHasAuthenticated(false);
          });
      } else if (hasAuthenticated && !hasUserInfo) {
        console.log("getting user info");
        getCurrentUser().then(async (response) => {
          client.models.User.get({
            id: response.username,
          })
            .then((user) => {
              setUserInformation(user.data as Schema["User"]["type"]);
              setHasUserInfo(true);
            })
            .catch((error) => {
              console.log("error", error);
            });
        });
      } else if (!hasAuthenticated && hasUserInfo) {
        console.log("clearing user info");
        setUserInformation(undefined);
        setHasUserInfo(false);
      }
    }
    checkUser();
  }, [hasAuthenticated, hasUserInfo]);

  const value: ValueType = useMemo(
    () => ({ setHasAuthenticated, userInformation, setUserInformation }),
    [setHasAuthenticated, userInformation]
  );

  if (!hasAuthenticated && !hasUserInfo) {
    return (
      <div className="flex items-center min-h-screen w-[35%] mx-auto">
        <div className="flex justify-center gap-x-10">
          <div className="flex flex-col gap-y-2">
            <BrandLogo />
            <h1 className="font-poppins font-bold text-4xl text-primary mt-4">
              Welcome to Culture!
            </h1>
            <Paragraph className="text-xl">
              Connect, share, and learn in a vibrant community dedicated to
              cultural exchange. Join today and celebrate diversity with the
              world!
            </Paragraph>
          </div>
          <div className="flex flex-col gap-y-2">
            <SegmentedControl
              options={[
                { label: "Log in", value: "login" },
                { label: "Sign up", value: "signup" },
              ]}
              onChange={(value) => {
                if (value === "login") {
                  setSignup(false);
                } else {
                  setSignup(true);
                }
              }}
              direction="horizontal"
            />
            {signup && <Signup setHasAuthenticated={setHasAuthenticated} />}
            {!signup && <Login setHasAuthenticated={setHasAuthenticated} />}
          </div>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
