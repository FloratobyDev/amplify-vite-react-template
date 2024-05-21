import { defineFunction } from '@aws-amplify/backend';

export const postAuthentication = defineFunction({
  name: 'postAuthentication',
  environment: {
    GOOGLE_CLIENT_ID: 'GOOGLE_CLIENT_ID',
    GOOGLE_CLIENT_SECRET: 'GOOGLE_CLIENT_SECRET',
  },
});