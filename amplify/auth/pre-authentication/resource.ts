import { defineFunction } from '@aws-amplify/backend';

export const preAuthentication = defineFunction({
  entry: "./handler.ts",
  name: 'preAuthentication',
  environment: {
    GOOGLE_CLIENT_ID: 'GOOGLE_CLIENT_ID',
    GOOGLE_CLIENT_SECRET: 'GOOGLE_CLIENT_SECRET',
  },
});