import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/

const schema = a.schema({
  ConnectionRequest: a
    .model({
      id: a.id().required(),
      senderId: a.id().required(),
      // receiverId: a.id().required(),
      status: a.string().required(),
      createdAt: a.datetime().required(),
      // receiver: a.belongsTo("User", "receiverId"),
      sender: a.belongsTo("User", "senderId"),
    }).authorization(allow => [allow.authenticated().to(["read"])]),
  Connection: a
    .model({
      id: a.id().required(),
      userId: a.id().required(),
      connectionId: a.string().required(),
      createdAt: a.datetime().required(),
      user: a.belongsTo("User", "userId"),
    }).authorization(allow => [allow.authenticated().to(["read"])]),
  Message: a
    .model({
      roomId: a.id().required(),
      content: a.string().default(""),
      timestamp: a.string().required(),
      senderId: a.id().required(),
      translatedContent: a.string().default(""),
      translated: a.boolean().default(false),
      room: a.belongsTo("Room", "roomId"),
    }).authorization(allow => [allow.authenticated().to(["read"])]),
  User: a
    .model({
      first_name: a.string().required(),
      last_name: a.string().required(),
      email: a.string().required(),
      hashedPassword: a.string().required(),
      status: a.string().default("offline"),
      connections: a.hasMany("Connection", "userId"),
      connectionRequests: a.hasMany("ConnectionRequest", "senderId"),
      rooms: a.hasMany("RoomUser", "userId"),
    }).authorization(allow => [allow.authenticated().to(["read"])]),
  Room: a
    .model({
      createdAt: a.datetime().required(),
      messages: a.hasMany("Message", "roomId"),
      roomUsers: a.hasMany("RoomUser", "roomId"),
    }).authorization(allow => [allow.authenticated().to(["read"])]),
  RoomUser: a
    .model({
      userId: a.id().required(),
      roomId: a.id().required(),
      user: a.belongsTo("User", "userId"),
      room: a.belongsTo("Room", "roomId"),
    }).authorization(allow => [allow.authenticated().to(["read"])]),
  });
  

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
