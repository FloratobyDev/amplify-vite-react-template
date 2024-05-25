import { defineFunction } from '@aws-amplify/backend';

export const postConfirmation = defineFunction({
  name: 'post-confirmation',
  environment: {
    AMPLIFY_DATA_GRAPHQL_ENDPOINT: 'https://api.example.com/graphql',
  }
});