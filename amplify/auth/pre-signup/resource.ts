import { defineFunction } from '@aws-amplify/backend';

export const preSignUp = defineFunction({
  entry: "./handler.ts",
  name: 'pre-signup',
  environment: {
    GOOGLE_CLIENT_ID: 'GOOGLE_CLIENT_ID',
    GOOGLE_CLIENT_SECRET: 'GOOGLE_CLIENT_SECRET',
  },
});