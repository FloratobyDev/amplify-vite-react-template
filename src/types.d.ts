import { Schema } from "../amplify/data/resource";

export type DropdownType = {
  label: string;
  onClick: () => void;
};

export type CategoryListType = {
  race: string;
  spokenLanguage: string;
  age: string;
  interests: string;
};

export type ProfileType = {
  id: string;
  connectionStatus?: string;
  name: string;
  overallRating: string;
  shortInfoList: Array<string>;
  shortDescription: string;
  user: Schema["User"]["type"];
};
