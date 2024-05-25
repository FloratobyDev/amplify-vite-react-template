/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getConnection = /* GraphQL */ `query GetConnection($connectionId: String!, $userId: ID!) {
  getConnection(connectionId: $connectionId, userId: $userId) {
    connectionId
    createdAt
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
export const getConnectionReceived = /* GraphQL */ `query GetConnectionReceived($receiverId: ID!, $senderId: ID!) {
  getConnectionReceived(receiverId: $receiverId, senderId: $senderId) {
    createdAt
    receiver {
      aboutMe
      age
      createdAt
      email
      fullName
      gender
      id
      interests
      profilePictureUrl
      race
      spokenLanguage
      status
      updatedAt
      __typename
    }
    receiverId
    senderId
    status
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConnectionReceivedQueryVariables,
  APITypes.GetConnectionReceivedQuery
>;
export const getConnectionRequest = /* GraphQL */ `query GetConnectionRequest($receiverId: ID!, $senderId: ID!) {
  getConnectionRequest(receiverId: $receiverId, senderId: $senderId) {
    createdAt
    receiverId
    sender {
      aboutMe
      age
      createdAt
      email
      fullName
      gender
      id
      interests
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
export const getDropdownList = /* GraphQL */ `query GetDropdownList($id: ID!) {
  getDropdownList(id: $id) {
    createdAt
    id
    name
    options
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDropdownListQueryVariables,
  APITypes.GetDropdownListQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    content
    createdAt
    id
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
export const getRaceList = /* GraphQL */ `query GetRaceList($id: ID!) {
  getRaceList(id: $id) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRaceListQueryVariables,
  APITypes.GetRaceListQuery
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
    connectionReceived {
      nextToken
      __typename
    }
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
export const listConnectionReceiveds = /* GraphQL */ `query ListConnectionReceiveds(
  $filter: ModelConnectionReceivedFilterInput
  $limit: Int
  $nextToken: String
  $receiverId: ModelIDKeyConditionInput
  $senderId: ID
  $sortDirection: ModelSortDirection
) {
  listConnectionReceiveds(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    receiverId: $receiverId
    senderId: $senderId
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      receiverId
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
  APITypes.ListConnectionReceivedsQueryVariables,
  APITypes.ListConnectionReceivedsQuery
>;
export const listConnectionRequests = /* GraphQL */ `query ListConnectionRequests(
  $filter: ModelConnectionRequestFilterInput
  $limit: Int
  $nextToken: String
  $receiverId: ModelIDKeyConditionInput
  $senderId: ID
  $sortDirection: ModelSortDirection
) {
  listConnectionRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    receiverId: $receiverId
    senderId: $senderId
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      receiverId
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
  $connectionId: ModelStringKeyConditionInput
  $filter: ModelConnectionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userId: ID
) {
  listConnections(
    connectionId: $connectionId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userId: $userId
  ) {
    items {
      connectionId
      createdAt
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
export const listDropdownLists = /* GraphQL */ `query ListDropdownLists(
  $filter: ModelDropdownListFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDropdownLists(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      name
      options
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDropdownListsQueryVariables,
  APITypes.ListDropdownListsQuery
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
export const listRaceLists = /* GraphQL */ `query ListRaceLists(
  $filter: ModelRaceListFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRaceLists(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRaceListsQueryVariables,
  APITypes.ListRaceListsQuery
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
