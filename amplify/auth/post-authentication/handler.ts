import type { PostAuthenticationTriggerHandler } from "aws-lambda";

// add user to group
export const handler: PostAuthenticationTriggerHandler = async (event) => {
  console.log("event", event);
  return event;
};
