/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import classNames from "classnames";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";

type Props = {
  children: React.ReactNode;
};

const client = generateClient<Schema>();

type ValueType = {
  setHasAuthenticated: (value: boolean) => void;
  userInformation: Schema["User"]["type"] | undefined;
};

export const AuthContext = createContext<ValueType | undefined>(undefined);

export default function AuthProvider({ children }: Props) {
  const [hasAuthenticated, setHasAuthenticated] = useState(false);
  const [userInformation, setUserInformation] = useState<
    Schema["User"]["type"] | undefined
  >(undefined);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    async function checkUser() {
      console.log("checking user");
      getCurrentUser()
        .then(async (response) => {
          console.log("response", response);
          client.models.User.get({
            id: response.username,
          })
            .then((user) => {
              setUserInformation(user.data as Schema["User"]["type"]);
            })
            .catch((error) => {
              console.log("error", error);
            });

          setHasAuthenticated(true);
        })
        .catch(() => {
          setHasAuthenticated(false);
        });
    }
    checkUser();
  }, []);

  const value: ValueType = useMemo(
    () => ({ setHasAuthenticated, userInformation }),
    [setHasAuthenticated, userInformation]
  );

  const loginClasses = classNames("btn join-item flex-1", {
    "btn-active": !signup,
  });

  const signupClasses = classNames("btn join-item flex-1", {
    "btn-active": signup,
  });

  if (!hasAuthenticated) {
    return (
      <div
        className="flex items-center justify-center w-full min-h-screen"
        data-theme="dark"
      >
        <div className="flex flex-col gap-y-2">
          <div className="join flex">
            <button
              onClick={() => {
                setSignup(false);
              }}
              className={loginClasses}
            >
              Log in
            </button>
            <button
              onClick={() => {
                setSignup(true);
              }}
              className={signupClasses}
            >
              Sign up
            </button>
          </div>
          {signup && <Signup setHasAuthenticated={setHasAuthenticated} />}
          {!signup && <Login setHasAuthenticated={setHasAuthenticated} />}
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
