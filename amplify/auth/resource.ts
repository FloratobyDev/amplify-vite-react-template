import { defineAuth } from "@aws-amplify/backend";
import { postConfirmation } from "./post-confirmation/resource";
import { postAuthentication } from "./post-authentication/resource";
import { preAuthentication } from "./pre-authentication/resource";
import { preSignUp } from "./pre-signup/resource";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers: {
    postConfirmation,
    postAuthentication,
    preAuthentication,
    preSignUp,
  },
});
