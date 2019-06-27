import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { CREATE_USER } from '../../services/user/mutations';
import { httpl } from '../../hooks/user';

export const userInitialState = {
  user: {
    loggedIn: false,
    email: '@',
  },
  users: [],
};

export const userActions = {
  login: state => ({ user: { loggedIn: true } }),
  logout: state => ({ user: { loggedIn: false } }),
  save: async (state, action) => {
    console.warn(action, 'action');
    const resp = await httpl({
      mutation: gql(CREATE_USER),
      variables: { user: action },
    });
    console.log(resp, 'resppppp');

    // console.log('zzz ', state, act, ' zzzz');
    return { user: action };
  },
};
