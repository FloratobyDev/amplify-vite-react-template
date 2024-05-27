import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'userInformationDrive',
  access: (allow) => ({
    'profile-pictures/{entity_id}/*': [
     allow.guest.to(['read', 'write']),
     allow.authenticated.to(['read', 'write']),
    ]
  }),
});