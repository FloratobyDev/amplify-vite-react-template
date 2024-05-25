import type { PreSignUpTriggerHandler } from "aws-lambda"

export const handler: PreSignUpTriggerHandler = async (event) => {
  // const birthdate = new Date(1998, 1,1);

  // // you must be 13 years or older
  // if (!isOlderThan(birthdate, 13)) {
  //   throw new Error("You must be 13 years or older to use this site")
  // }

  return event
}