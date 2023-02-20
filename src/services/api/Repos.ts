import { get } from './base';

export const Repos = {
  index: () =>
    get('users/anubhavadarsh/repos', {
      headers: {
        'Content-type': 'application/vnd.github+json',
      },
    }),
};
