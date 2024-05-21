import type { PreAuthenticationTriggerHandler } from "aws-lambda";

// add user to group
export const handler: PreAuthenticationTriggerHandler = async (event) => {
  console.log("event", event);
  return event;
  // const { code } = event.response; // Authorization code from Google
  // const clientId = env.GOOGLE_CLIENT_ID;
  // const clientSecret = env.GOOGLE_CLIENT_SECRET;
  // const redirectUri = "http://localhost:5173"; // Must match the redirect URI in the Google Developer Console

  // // Construct the token request payload
  // const tokenPayload = {
  //   code: code,
  //   client_id: clientId,
  //   client_secret: clientSecret,
  //   redirect_uri: redirectUri,
  //   grant_type: "authorization_code",
  // };

  // try {
  //   // Exchange the authorization code for an access token
  //   const tokenResponse = await axios.post(
  //     "https://oauth2.googleapis.com/token",
  //     tokenPayload
  //   );

  //   // Extract the access token from the response
  //   const { access_token } = tokenResponse.data;

  //   // Use the access token to get the user's profile information
  //   const userInfoResponse = await axios.get(
  //     "https://www.googleapis.com/oauth2/v2/userinfo",
  //     {
  //       headers: { Authorization: `Bearer ${access_token}` },
  //     }
  //   );

  //   const { given_name, family_name, email } = userInfoResponse.data;

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       firstName: given_name,
  //       lastName: family_name,
  //       email: email,
  //     }),
  //   };
  // } catch (error) {
  //   console.error(
  //     "Error exchanging authorization code for access token:",
  //     error
  //   );
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ error: "Internal Server Error" }),
  //   };
  // }
};
