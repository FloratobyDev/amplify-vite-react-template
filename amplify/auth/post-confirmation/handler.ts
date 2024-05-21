import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/postConfirmation";
import { createUser } from "./graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint:
          "https://bzgleztxv5ga7afty2lo6ggzre.appsync-api.us-east-1.amazonaws.com/graphql",
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: PostConfirmationTriggerHandler = async (event) => {

  await client.graphql({
      query: createUser,
      variables: {
        input: {
          first_name: "New",
          last_name: "User",
          email: "example@gmail.com",
          hashedPassword: "password",
          status: "offline",
        },
      },
    }).then((response) => {
      throw new Error("User created:" + response);
    }).catch((error) => {
      throw new Error("Error creating user:" + error);
    });
  
  return event;
};
