import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/

const schema = a
  .schema({
    ConnectionRequest: a
      .model({
        senderId: a.id().required(),
        receiverId: a.id().required(),
        status: a.string().required(),
        sender: a.belongsTo("User", "senderId"),
      })
      .identifier(["senderId", "receiverId"])
      .authorization((allow) => [
        allow.authenticated().to(["read", "create", "delete", "update"]),
      ]),
    ConnectionReceived: a
      .model({
        senderId: a.id().required(),
        receiverId: a.id().required(),
        status: a.string().required(),
        receiver: a.belongsTo("User", "receiverId"),
      })
      .identifier(["senderId", "receiverId"])
      .authorization((allow) => [
        allow.authenticated().to(["read", "create", "delete"]),
      ]),
    Connection: a
      .model({
        id: a.id().required(),
        userId: a.id().required(),
        connectionId: a.string().required(),
        user: a.belongsTo("User", "userId"),
      })
      .authorization((allow) => [
        allow.authenticated().to(["read", "delete", "create"]),
      ]),
    Message: a
      .model({
        roomId: a.id().required(),
        content: a.string().default(""),
        timestamp: a.string().required(),
        senderId: a.id().required(),
        translatedContent: a.string().default(""),
        room: a.belongsTo("Room", "roomId"),
      })
      .authorization((allow) => [
        allow.authenticated().to(["read", "delete", "create"]),
      ]),
    User: a
      .model({
        id: a.id().required(),
        fullName: a.string(),
        age: a.integer(),
        gender: a.string(),
        race: a.string(),
        spokenLanguage: a.string(),
        interests: a.string().array(),
        aboutMe: a.string(),
        profilePictureUrl: a.string(),
        email: a.string().required(),
        status: a.string().default("offline"),
        connections: a.hasMany("Connection", "userId"),
        connectionRequests: a.hasMany("ConnectionRequest", "senderId"),
        connectionReceived: a.hasMany("ConnectionReceived", "receiverId"),
        rooms: a.hasMany("RoomUser", "userId"),
      })
      .authorization((allow) => [
        allow.authenticated().to(["read", "update", "delete"]),
      ]),
    Room: a
      .model({
        id: a.id().required(),
        messages: a.hasMany("Message", "roomId"),
        roomUsers: a.hasMany("RoomUser", "roomId"),
      })
      .authorization((allow) => [allow.authenticated().to(["read","create","delete"])]),
    RoomUser: a
      .model({
        userId: a.id().required(),
        roomId: a.id().required(),
        user: a.belongsTo("User", "userId"),
        room: a.belongsTo("Room", "roomId"),
      })
      .authorization((allow) => [allow.authenticated().to(["read","create","delete"])]),
    RaceList: a
      .model({
        id: a.id().required(),
        name: a.string().required(),
      })
      .authorization((allow) => [allow.authenticated().to(["read"])]),
    DropdownList: a
      .model({
        id: a.id().required(),
        name: a.string().required(),
        options: a.string().array(),
      })
      .authorization((allow) => [allow.authenticated().to(["read"])]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
