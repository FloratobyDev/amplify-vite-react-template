/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getConnection = /* GraphQL */ `query GetConnection($id: ID!) {
  getConnection(id: $id) {
    connectionId
    createdAt
    id
    owner
    updatedAt
    user {
      aboutMe
      age
      createdAt
      email
      fullName
      gender
      id
      interests
      owner
      profilePictureUrl
      race
      spokenLanguage
      status
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConnectionQueryVariables,
  APITypes.GetConnectionQuery
>;
export const getConnectionRequest = /* GraphQL */ `query GetConnectionRequest($id: ID!) {
  getConnectionRequest(id: $id) {
    createdAt
    id
    owner
    sender {
      aboutMe
      age
      createdAt
      email
      fullName
      gender
      id
      interests
      owner
      profilePictureUrl
      race
      spokenLanguage
      status
      updatedAt
      __typename
    }
    senderId
    status
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConnectionRequestQueryVariables,
  APITypes.GetConnectionRequestQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    content
    createdAt
    id
    owner
    room {
      createdAt
      id
      updatedAt
      __typename
    }
    roomId
    senderId
    timestamp
    translatedContent
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const getRoom = /* GraphQL */ `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    roomUsers {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRoomQueryVariables, APITypes.GetRoomQuery>;
export const getRoomUser = /* GraphQL */ `query GetRoomUser($id: ID!) {
  getRoomUser(id: $id) {
    createdAt
    id
    room {
      createdAt
      id
      updatedAt
      __typename
    }
    roomId
    updatedAt
    user {
      aboutMe
      age
      createdAt
      email
      fullName
      gender
      id
      interests
      owner
      profilePictureUrl
      race
      spokenLanguage
      status
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRoomUserQueryVariables,
  APITypes.GetRoomUserQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    aboutMe
    age
    connectionRequests {
      nextToken
      __typename
    }
    connections {
      nextToken
      __typename
    }
    createdAt
    email
    fullName
    gender
    id
    interests
    owner
    profilePictureUrl
    race
    rooms {
      nextToken
      __typename
    }
    spokenLanguage
    status
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listConnectionRequests = /* GraphQL */ `query ListConnectionRequests(
  $filter: ModelConnectionRequestFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listConnectionRequests(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      owner
      senderId
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConnectionRequestsQueryVariables,
  APITypes.ListConnectionRequestsQuery
>;
export const listConnections = /* GraphQL */ `query ListConnections(
  $filter: ModelConnectionFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listConnections(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      connectionId
      createdAt
      id
      owner
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConnectionsQueryVariables,
  APITypes.ListConnectionsQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      owner
      roomId
      senderId
      timestamp
      translatedContent
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const listRoomUsers = /* GraphQL */ `query ListRoomUsers(
  $filter: ModelRoomUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      roomId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRoomUsersQueryVariables,
  APITypes.ListRoomUsersQuery
>;
export const listRooms = /* GraphQL */ `query ListRooms(
  $filter: ModelRoomFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRooms(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRoomsQueryVariables, APITypes.ListRoomsQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      aboutMe
      age
      createdAt
      email
      fullName
      gender
      id
      interests
      owner
      profilePictureUrl
      race
      spokenLanguage
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
