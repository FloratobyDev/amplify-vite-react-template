/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateConnection = /* GraphQL */ `subscription OnCreateConnection(
  $filter: ModelSubscriptionConnectionFilterInput
) {
  onCreateConnection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConnectionSubscriptionVariables,
  APITypes.OnCreateConnectionSubscription
>;
export const onCreateConnectionReceived = /* GraphQL */ `subscription OnCreateConnectionReceived(
  $filter: ModelSubscriptionConnectionReceivedFilterInput
) {
  onCreateConnectionReceived(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConnectionReceivedSubscriptionVariables,
  APITypes.OnCreateConnectionReceivedSubscription
>;
export const onCreateConnectionRequest = /* GraphQL */ `subscription OnCreateConnectionRequest(
  $filter: ModelSubscriptionConnectionRequestFilterInput
) {
  onCreateConnectionRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateConnectionRequestSubscriptionVariables,
  APITypes.OnCreateConnectionRequestSubscription
>;
export const onCreateDropdownList = /* GraphQL */ `subscription OnCreateDropdownList(
  $filter: ModelSubscriptionDropdownListFilterInput
) {
  onCreateDropdownList(filter: $filter) {
    createdAt
    id
    name
    options
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDropdownListSubscriptionVariables,
  APITypes.OnCreateDropdownListSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onCreateRaceList = /* GraphQL */ `subscription OnCreateRaceList($filter: ModelSubscriptionRaceListFilterInput) {
  onCreateRaceList(filter: $filter) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRaceListSubscriptionVariables,
  APITypes.OnCreateRaceListSubscription
>;
export const onCreateRoom = /* GraphQL */ `subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onCreateRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoomSubscriptionVariables,
  APITypes.OnCreateRoomSubscription
>;
export const onCreateRoomUser = /* GraphQL */ `subscription OnCreateRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
  onCreateRoomUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoomUserSubscriptionVariables,
  APITypes.OnCreateRoomUserSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteConnection = /* GraphQL */ `subscription OnDeleteConnection(
  $filter: ModelSubscriptionConnectionFilterInput
) {
  onDeleteConnection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConnectionSubscriptionVariables,
  APITypes.OnDeleteConnectionSubscription
>;
export const onDeleteConnectionReceived = /* GraphQL */ `subscription OnDeleteConnectionReceived(
  $filter: ModelSubscriptionConnectionReceivedFilterInput
) {
  onDeleteConnectionReceived(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConnectionReceivedSubscriptionVariables,
  APITypes.OnDeleteConnectionReceivedSubscription
>;
export const onDeleteConnectionRequest = /* GraphQL */ `subscription OnDeleteConnectionRequest(
  $filter: ModelSubscriptionConnectionRequestFilterInput
) {
  onDeleteConnectionRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteConnectionRequestSubscriptionVariables,
  APITypes.OnDeleteConnectionRequestSubscription
>;
export const onDeleteDropdownList = /* GraphQL */ `subscription OnDeleteDropdownList(
  $filter: ModelSubscriptionDropdownListFilterInput
) {
  onDeleteDropdownList(filter: $filter) {
    createdAt
    id
    name
    options
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDropdownListSubscriptionVariables,
  APITypes.OnDeleteDropdownListSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onDeleteRaceList = /* GraphQL */ `subscription OnDeleteRaceList($filter: ModelSubscriptionRaceListFilterInput) {
  onDeleteRaceList(filter: $filter) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRaceListSubscriptionVariables,
  APITypes.OnDeleteRaceListSubscription
>;
export const onDeleteRoom = /* GraphQL */ `subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
  onDeleteRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoomSubscriptionVariables,
  APITypes.OnDeleteRoomSubscription
>;
export const onDeleteRoomUser = /* GraphQL */ `subscription OnDeleteRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
  onDeleteRoomUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoomUserSubscriptionVariables,
  APITypes.OnDeleteRoomUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateConnection = /* GraphQL */ `subscription OnUpdateConnection(
  $filter: ModelSubscriptionConnectionFilterInput
) {
  onUpdateConnection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConnectionSubscriptionVariables,
  APITypes.OnUpdateConnectionSubscription
>;
export const onUpdateConnectionReceived = /* GraphQL */ `subscription OnUpdateConnectionReceived(
  $filter: ModelSubscriptionConnectionReceivedFilterInput
) {
  onUpdateConnectionReceived(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConnectionReceivedSubscriptionVariables,
  APITypes.OnUpdateConnectionReceivedSubscription
>;
export const onUpdateConnectionRequest = /* GraphQL */ `subscription OnUpdateConnectionRequest(
  $filter: ModelSubscriptionConnectionRequestFilterInput
) {
  onUpdateConnectionRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateConnectionRequestSubscriptionVariables,
  APITypes.OnUpdateConnectionRequestSubscription
>;
export const onUpdateDropdownList = /* GraphQL */ `subscription OnUpdateDropdownList(
  $filter: ModelSubscriptionDropdownListFilterInput
) {
  onUpdateDropdownList(filter: $filter) {
    createdAt
    id
    name
    options
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDropdownListSubscriptionVariables,
  APITypes.OnUpdateDropdownListSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onUpdateRaceList = /* GraphQL */ `subscription OnUpdateRaceList($filter: ModelSubscriptionRaceListFilterInput) {
  onUpdateRaceList(filter: $filter) {
    createdAt
    id
    name
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRaceListSubscriptionVariables,
  APITypes.OnUpdateRaceListSubscription
>;
export const onUpdateRoom = /* GraphQL */ `subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onUpdateRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoomSubscriptionVariables,
  APITypes.OnUpdateRoomSubscription
>;
export const onUpdateRoomUser = /* GraphQL */ `subscription OnUpdateRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
  onUpdateRoomUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoomUserSubscriptionVariables,
  APITypes.OnUpdateRoomUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
