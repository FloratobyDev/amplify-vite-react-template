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
    // externalProviders: {
    //   google: {
    //     clientId: secret("GOOGLE_CLIENT_ID"),
    //     clientSecret: secret("GOOGLE_CLIENT_SECRET"),
    //     scopes: ["email", "openid", "profile"],
    //   },
    //   callbackUrls: ["http://localhost:5173"],
    //   logoutUrls: ["http://localhost:5173"],
    //   },
  },
  triggers: {
    postConfirmation,
    postAuthentication,
    preAuthentication,
    preSignUp,
  },
});
