/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Connection = {
  __typename: "Connection",
  connectionId: string,
  createdAt: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type User = {
  __typename: "User",
  aboutMe?: string | null,
  age?: number | null,
  connectionRequests?: ModelConnectionRequestConnection | null,
  connections?: ModelConnectionConnection | null,
  createdAt: string,
  email: string,
  fullName?: string | null,
  gender?: string | null,
  id: string,
  interests?: Array< string | null > | null,
  owner?: string | null,
  profilePictureUrl?: string | null,
  race?: string | null,
  rooms?: ModelRoomUserConnection | null,
  spokenLanguage?: string | null,
  status?: string | null,
  updatedAt: string,
};

export type ModelConnectionRequestConnection = {
  __typename: "ModelConnectionRequestConnection",
  items:  Array<ConnectionRequest | null >,
  nextToken?: string | null,
};

export type ConnectionRequest = {
  __typename: "ConnectionRequest",
  createdAt: string,
  id: string,
  owner?: string | null,
  sender?: User | null,
  senderId: string,
  status: string,
  updatedAt: string,
};

export type ModelConnectionConnection = {
  __typename: "ModelConnectionConnection",
  items:  Array<Connection | null >,
  nextToken?: string | null,
};

export type ModelRoomUserConnection = {
  __typename: "ModelRoomUserConnection",
  items:  Array<RoomUser | null >,
  nextToken?: string | null,
};

export type RoomUser = {
  __typename: "RoomUser",
  createdAt: string,
  id: string,
  room?: Room | null,
  roomId: string,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type Room = {
  __typename: "Room",
  createdAt: string,
  id: string,
  messages?: ModelMessageConnection | null,
  roomUsers?: ModelRoomUserConnection | null,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  content?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  room?: Room | null,
  roomId: string,
  senderId: string,
  timestamp: string,
  translatedContent?: string | null,
  updatedAt: string,
};

export type ModelConnectionRequestFilterInput = {
  and?: Array< ModelConnectionRequestFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelConnectionRequestFilterInput | null,
  or?: Array< ModelConnectionRequestFilterInput | null > | null,
  owner?: ModelStringInput | null,
  senderId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelConnectionFilterInput = {
  and?: Array< ModelConnectionFilterInput | null > | null,
  connectionId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelConnectionFilterInput | null,
  or?: Array< ModelConnectionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelMessageFilterInput = {
  and?: Array< ModelMessageFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelMessageFilterInput | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
  roomId?: ModelIDInput | null,
  senderId?: ModelIDInput | null,
  timestamp?: ModelStringInput | null,
  translatedContent?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRoomUserFilterInput = {
  and?: Array< ModelRoomUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelRoomUserFilterInput | null,
  or?: Array< ModelRoomUserFilterInput | null > | null,
  roomId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelRoomFilterInput = {
  and?: Array< ModelRoomFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelRoomFilterInput | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items:  Array<Room | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  aboutMe?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  id?: ModelIDInput | null,
  interests?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  race?: ModelStringInput | null,
  spokenLanguage?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelConnectionConditionInput = {
  and?: Array< ModelConnectionConditionInput | null > | null,
  connectionId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelConnectionConditionInput | null,
  or?: Array< ModelConnectionConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateConnectionInput = {
  connectionId: string,
  id?: string | null,
  userId: string,
};

export type ModelConnectionRequestConditionInput = {
  and?: Array< ModelConnectionRequestConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelConnectionRequestConditionInput | null,
  or?: Array< ModelConnectionRequestConditionInput | null > | null,
  owner?: ModelStringInput | null,
  senderId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateConnectionRequestInput = {
  id?: string | null,
  senderId: string,
  status: string,
};

export type ModelMessageConditionInput = {
  and?: Array< ModelMessageConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelMessageConditionInput | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  owner?: ModelStringInput | null,
  roomId?: ModelIDInput | null,
  senderId?: ModelIDInput | null,
  timestamp?: ModelStringInput | null,
  translatedContent?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateMessageInput = {
  content?: string | null,
  id?: string | null,
  roomId: string,
  senderId: string,
  timestamp: string,
  translatedContent?: string | null,
};

export type ModelRoomConditionInput = {
  and?: Array< ModelRoomConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelRoomConditionInput | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateRoomInput = {
  createdAt?: string | null,
  id?: string | null,
};

export type ModelRoomUserConditionInput = {
  and?: Array< ModelRoomUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelRoomUserConditionInput | null,
  or?: Array< ModelRoomUserConditionInput | null > | null,
  roomId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateRoomUserInput = {
  id?: string | null,
  roomId: string,
  userId: string,
};

export type ModelUserConditionInput = {
  aboutMe?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  interests?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  race?: ModelStringInput | null,
  spokenLanguage?: ModelStringInput | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  aboutMe?: string | null,
  age?: number | null,
  email: string,
  fullName?: string | null,
  gender?: string | null,
  id?: string | null,
  interests?: Array< string | null > | null,
  profilePictureUrl?: string | null,
  race?: string | null,
  spokenLanguage?: string | null,
  status?: string | null,
};

export type DeleteConnectionInput = {
  id: string,
};

export type DeleteConnectionRequestInput = {
  id: string,
};

export type DeleteMessageInput = {
  id: string,
};

export type DeleteRoomInput = {
  id: string,
};

export type DeleteRoomUserInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateConnectionInput = {
  connectionId?: string | null,
  id: string,
  userId?: string | null,
};

export type UpdateConnectionRequestInput = {
  id: string,
  senderId?: string | null,
  status?: string | null,
};

export type UpdateMessageInput = {
  content?: string | null,
  id: string,
  roomId?: string | null,
  senderId?: string | null,
  timestamp?: string | null,
  translatedContent?: string | null,
};

export type UpdateRoomInput = {
  createdAt?: string | null,
  id: string,
};

export type UpdateRoomUserInput = {
  id: string,
  roomId?: string | null,
  userId?: string | null,
};

export type UpdateUserInput = {
  aboutMe?: string | null,
  age?: number | null,
  email?: string | null,
  fullName?: string | null,
  gender?: string | null,
  id: string,
  interests?: Array< string | null > | null,
  profilePictureUrl?: string | null,
  race?: string | null,
  spokenLanguage?: string | null,
  status?: string | null,
};

export type ModelSubscriptionConnectionFilterInput = {
  and?: Array< ModelSubscriptionConnectionFilterInput | null > | null,
  connectionId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionConnectionFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionConnectionRequestFilterInput = {
  and?: Array< ModelSubscriptionConnectionRequestFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionConnectionRequestFilterInput | null > | null,
  owner?: ModelStringInput | null,
  senderId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionMessageFilterInput = {
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  owner?: ModelStringInput | null,
  roomId?: ModelSubscriptionIDInput | null,
  senderId?: ModelSubscriptionIDInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  translatedContent?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRoomFilterInput = {
  and?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionRoomFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionRoomUserFilterInput = {
  and?: Array< ModelSubscriptionRoomUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionRoomUserFilterInput | null > | null,
  roomId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  aboutMe?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  interests?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  race?: ModelSubscriptionStringInput | null,
  spokenLanguage?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type GetConnectionQueryVariables = {
  id: string,
};

export type GetConnectionQuery = {
  getConnection?:  {
    __typename: "Connection",
    connectionId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetConnectionRequestQueryVariables = {
  id: string,
};

export type GetConnectionRequestQuery = {
  getConnectionRequest?:  {
    __typename: "ConnectionRequest",
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    senderId: string,
    status: string,
    updatedAt: string,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    senderId: string,
    timestamp: string,
    translatedContent?: string | null,
    updatedAt: string,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    roomUsers?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetRoomUserQueryVariables = {
  id: string,
};

export type GetRoomUserQuery = {
  getRoomUser?:  {
    __typename: "RoomUser",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    aboutMe?: string | null,
    age?: number | null,
    connectionRequests?:  {
      __typename: "ModelConnectionRequestConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    fullName?: string | null,
    gender?: string | null,
    id: string,
    interests?: Array< string | null > | null,
    owner?: string | null,
    profilePictureUrl?: string | null,
    race?: string | null,
    rooms?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    spokenLanguage?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type ListConnectionRequestsQueryVariables = {
  filter?: ModelConnectionRequestFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListConnectionRequestsQuery = {
  listConnectionRequests?:  {
    __typename: "ModelConnectionRequestConnection",
    items:  Array< {
      __typename: "ConnectionRequest",
      createdAt: string,
      id: string,
      owner?: string | null,
      senderId: string,
      status: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListConnectionsQueryVariables = {
  filter?: ModelConnectionFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListConnectionsQuery = {
  listConnections?:  {
    __typename: "ModelConnectionConnection",
    items:  Array< {
      __typename: "Connection",
      connectionId: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      content?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      roomId: string,
      senderId: string,
      timestamp: string,
      translatedContent?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRoomUsersQueryVariables = {
  filter?: ModelRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomUsersQuery = {
  listRoomUsers?:  {
    __typename: "ModelRoomUserConnection",
    items:  Array< {
      __typename: "RoomUser",
      createdAt: string,
      id: string,
      roomId: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items:  Array< {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateConnectionMutationVariables = {
  condition?: ModelConnectionConditionInput | null,
  input: CreateConnectionInput,
};

export type CreateConnectionMutation = {
  createConnection?:  {
    __typename: "Connection",
    connectionId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateConnectionRequestMutationVariables = {
  condition?: ModelConnectionRequestConditionInput | null,
  input: CreateConnectionRequestInput,
};

export type CreateConnectionRequestMutation = {
  createConnectionRequest?:  {
    __typename: "ConnectionRequest",
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    senderId: string,
    status: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    senderId: string,
    timestamp: string,
    translatedContent?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateRoomMutationVariables = {
  condition?: ModelRoomConditionInput | null,
  input: CreateRoomInput,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    roomUsers?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateRoomUserMutationVariables = {
  condition?: ModelRoomUserConditionInput | null,
  input: CreateRoomUserInput,
};

export type CreateRoomUserMutation = {
  createRoomUser?:  {
    __typename: "RoomUser",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    aboutMe?: string | null,
    age?: number | null,
    connectionRequests?:  {
      __typename: "ModelConnectionRequestConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    fullName?: string | null,
    gender?: string | null,
    id: string,
    interests?: Array< string | null > | null,
    owner?: string | null,
    profilePictureUrl?: string | null,
    race?: string | null,
    rooms?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    spokenLanguage?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteConnectionMutationVariables = {
  condition?: ModelConnectionConditionInput | null,
  input: DeleteConnectionInput,
};

export type DeleteConnectionMutation = {
  deleteConnection?:  {
    __typename: "Connection",
    connectionId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteConnectionRequestMutationVariables = {
  condition?: ModelConnectionRequestConditionInput | null,
  input: DeleteConnectionRequestInput,
};

export type DeleteConnectionRequestMutation = {
  deleteConnectionRequest?:  {
    __typename: "ConnectionRequest",
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    senderId: string,
    status: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    senderId: string,
    timestamp: string,
    translatedContent?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  condition?: ModelRoomConditionInput | null,
  input: DeleteRoomInput,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    roomUsers?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteRoomUserMutationVariables = {
  condition?: ModelRoomUserConditionInput | null,
  input: DeleteRoomUserInput,
};

export type DeleteRoomUserMutation = {
  deleteRoomUser?:  {
    __typename: "RoomUser",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    aboutMe?: string | null,
    age?: number | null,
    connectionRequests?:  {
      __typename: "ModelConnectionRequestConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    fullName?: string | null,
    gender?: string | null,
    id: string,
    interests?: Array< string | null > | null,
    owner?: string | null,
    profilePictureUrl?: string | null,
    race?: string | null,
    rooms?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    spokenLanguage?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateConnectionMutationVariables = {
  condition?: ModelConnectionConditionInput | null,
  input: UpdateConnectionInput,
};

export type UpdateConnectionMutation = {
  updateConnection?:  {
    __typename: "Connection",
    connectionId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateConnectionRequestMutationVariables = {
  condition?: ModelConnectionRequestConditionInput | null,
  input: UpdateConnectionRequestInput,
};

export type UpdateConnectionRequestMutation = {
  updateConnectionRequest?:  {
    __typename: "ConnectionRequest",
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    senderId: string,
    status: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  condition?: ModelMessageConditionInput | null,
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    senderId: string,
    timestamp: string,
    translatedContent?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  condition?: ModelRoomConditionInput | null,
  input: UpdateRoomInput,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    roomUsers?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateRoomUserMutationVariables = {
  condition?: ModelRoomUserConditionInput | null,
  input: UpdateRoomUserInput,
};

export type UpdateRoomUserMutation = {
  updateRoomUser?:  {
    __typename: "RoomUser",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    aboutMe?: string | null,
    age?: number | null,
    connectionRequests?:  {
      __typename: "ModelConnectionRequestConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    fullName?: string | null,
    gender?: string | null,
    id: string,
    interests?: Array< string | null > | null,
    owner?: string | null,
    profilePictureUrl?: string | null,
    race?: string | null,
    rooms?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    spokenLanguage?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionFilterInput | null,
};

export type OnCreateConnectionSubscription = {
  onCreateConnection?:  {
    __typename: "Connection",
    connectionId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateConnectionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionRequestFilterInput | null,
};

export type OnCreateConnectionRequestSubscription = {
  onCreateConnectionRequest?:  {
    __typename: "ConnectionRequest",
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    senderId: string,
    status: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    senderId: string,
    timestamp: string,
    translatedContent?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    roomUsers?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionRoomUserFilterInput | null,
};

export type OnCreateRoomUserSubscription = {
  onCreateRoomUser?:  {
    __typename: "RoomUser",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    aboutMe?: string | null,
    age?: number | null,
    connectionRequests?:  {
      __typename: "ModelConnectionRequestConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    fullName?: string | null,
    gender?: string | null,
    id: string,
    interests?: Array< string | null > | null,
    owner?: string | null,
    profilePictureUrl?: string | null,
    race?: string | null,
    rooms?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    spokenLanguage?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionFilterInput | null,
};

export type OnDeleteConnectionSubscription = {
  onDeleteConnection?:  {
    __typename: "Connection",
    connectionId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteConnectionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionRequestFilterInput | null,
};

export type OnDeleteConnectionRequestSubscription = {
  onDeleteConnectionRequest?:  {
    __typename: "ConnectionRequest",
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    senderId: string,
    status: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    senderId: string,
    timestamp: string,
    translatedContent?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    roomUsers?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionRoomUserFilterInput | null,
};

export type OnDeleteRoomUserSubscription = {
  onDeleteRoomUser?:  {
    __typename: "RoomUser",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    aboutMe?: string | null,
    age?: number | null,
    connectionRequests?:  {
      __typename: "ModelConnectionRequestConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    fullName?: string | null,
    gender?: string | null,
    id: string,
    interests?: Array< string | null > | null,
    owner?: string | null,
    profilePictureUrl?: string | null,
    race?: string | null,
    rooms?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    spokenLanguage?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateConnectionSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionFilterInput | null,
};

export type OnUpdateConnectionSubscription = {
  onUpdateConnection?:  {
    __typename: "Connection",
    connectionId: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateConnectionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionRequestFilterInput | null,
};

export type OnUpdateConnectionRequestSubscription = {
  onUpdateConnectionRequest?:  {
    __typename: "ConnectionRequest",
    createdAt: string,
    id: string,
    owner?: string | null,
    sender?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    senderId: string,
    status: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    senderId: string,
    timestamp: string,
    translatedContent?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscriptionVariables = {
  filter?: ModelSubscriptionRoomFilterInput | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    createdAt: string,
    id: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      nextToken?: string | null,
    } | null,
    roomUsers?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomUserSubscriptionVariables = {
  filter?: ModelSubscriptionRoomUserFilterInput | null,
};

export type OnUpdateRoomUserSubscription = {
  onUpdateRoomUser?:  {
    __typename: "RoomUser",
    createdAt: string,
    id: string,
    room?:  {
      __typename: "Room",
      createdAt: string,
      id: string,
      updatedAt: string,
    } | null,
    roomId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      aboutMe?: string | null,
      age?: number | null,
      createdAt: string,
      email: string,
      fullName?: string | null,
      gender?: string | null,
      id: string,
      interests?: Array< string | null > | null,
      owner?: string | null,
      profilePictureUrl?: string | null,
      race?: string | null,
      spokenLanguage?: string | null,
      status?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    aboutMe?: string | null,
    age?: number | null,
    connectionRequests?:  {
      __typename: "ModelConnectionRequestConnection",
      nextToken?: string | null,
    } | null,
    connections?:  {
      __typename: "ModelConnectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    fullName?: string | null,
    gender?: string | null,
    id: string,
    interests?: Array< string | null > | null,
    owner?: string | null,
    profilePictureUrl?: string | null,
    race?: string | null,
    rooms?:  {
      __typename: "ModelRoomUserConnection",
      nextToken?: string | null,
    } | null,
    spokenLanguage?: string | null,
    status?: string | null,
    updatedAt: string,
  } | null,
};
