import type { PostConfirmationTriggerHandler } from "aws-lambda";
import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/postConfirmation";
import { createUser } from "./graphql/mutations";
import { listUsers } from "./graphql/queries";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint:
          "https://jqifwl4sandbdk2psugdp37y2q.appsync-api.us-east-1.amazonaws.com/graphql",
        region: env.AWS_REGION,
        defaultAuthMode: "userPool",
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
        id: event.request.userAttributes.sub,
        email: event.request.userAttributes.email,
      },
    },
  });

  await client.graphql({
    query: listUsers,
  });

  return event;
};
