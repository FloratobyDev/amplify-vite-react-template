/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createConnection = /* GraphQL */ `mutation CreateConnection(
  $condition: ModelConnectionConditionInput
  $input: CreateConnectionInput!
) {
  createConnection(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConnectionMutationVariables,
  APITypes.CreateConnectionMutation
>;
export const createConnectionRequest = /* GraphQL */ `mutation CreateConnectionRequest(
  $condition: ModelConnectionRequestConditionInput
  $input: CreateConnectionRequestInput!
) {
  createConnectionRequest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateConnectionRequestMutationVariables,
  APITypes.CreateConnectionRequestMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $condition: ModelMessageConditionInput
  $input: CreateMessageInput!
) {
  createMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const createRoom = /* GraphQL */ `mutation CreateRoom(
  $condition: ModelRoomConditionInput
  $input: CreateRoomInput!
) {
  createRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateRoomMutationVariables,
  APITypes.CreateRoomMutation
>;
export const createRoomUser = /* GraphQL */ `mutation CreateRoomUser(
  $condition: ModelRoomUserConditionInput
  $input: CreateRoomUserInput!
) {
  createRoomUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateRoomUserMutationVariables,
  APITypes.CreateRoomUserMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteConnection = /* GraphQL */ `mutation DeleteConnection(
  $condition: ModelConnectionConditionInput
  $input: DeleteConnectionInput!
) {
  deleteConnection(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConnectionMutationVariables,
  APITypes.DeleteConnectionMutation
>;
export const deleteConnectionRequest = /* GraphQL */ `mutation DeleteConnectionRequest(
  $condition: ModelConnectionRequestConditionInput
  $input: DeleteConnectionRequestInput!
) {
  deleteConnectionRequest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteConnectionRequestMutationVariables,
  APITypes.DeleteConnectionRequestMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $condition: ModelMessageConditionInput
  $input: DeleteMessageInput!
) {
  deleteMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const deleteRoom = /* GraphQL */ `mutation DeleteRoom(
  $condition: ModelRoomConditionInput
  $input: DeleteRoomInput!
) {
  deleteRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteRoomMutationVariables,
  APITypes.DeleteRoomMutation
>;
export const deleteRoomUser = /* GraphQL */ `mutation DeleteRoomUser(
  $condition: ModelRoomUserConditionInput
  $input: DeleteRoomUserInput!
) {
  deleteRoomUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteRoomUserMutationVariables,
  APITypes.DeleteRoomUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateConnection = /* GraphQL */ `mutation UpdateConnection(
  $condition: ModelConnectionConditionInput
  $input: UpdateConnectionInput!
) {
  updateConnection(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConnectionMutationVariables,
  APITypes.UpdateConnectionMutation
>;
export const updateConnectionRequest = /* GraphQL */ `mutation UpdateConnectionRequest(
  $condition: ModelConnectionRequestConditionInput
  $input: UpdateConnectionRequestInput!
) {
  updateConnectionRequest(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateConnectionRequestMutationVariables,
  APITypes.UpdateConnectionRequestMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $condition: ModelMessageConditionInput
  $input: UpdateMessageInput!
) {
  updateMessage(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const updateRoom = /* GraphQL */ `mutation UpdateRoom(
  $condition: ModelRoomConditionInput
  $input: UpdateRoomInput!
) {
  updateRoom(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateRoomMutationVariables,
  APITypes.UpdateRoomMutation
>;
export const updateRoomUser = /* GraphQL */ `mutation UpdateRoomUser(
  $condition: ModelRoomUserConditionInput
  $input: UpdateRoomUserInput!
) {
  updateRoomUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateRoomUserMutationVariables,
  APITypes.UpdateRoomUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
