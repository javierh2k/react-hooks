import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { CREATE_USER, UPDATE_USER } from '../../services/user/mutations';

import { client } from '../../hooks/user';

export const userInitialState = {
  userModel: {
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
    const { id } = action.userModel || '0';
    delete action.userModel.id;
    console.log(action, '===========');
    const varibles = {
      id,
      input: { ...action.userModel },
    };

    let GGQL = CREATE_USER;

    if (id !== '0') {
      GGQL = UPDATE_USER;
    }

    const result = await client.request(GGQL, varibles);
    console.log(result, '********');
    // const resp = await httpl({
    //   mutation: gql(CREATE_USER),
    //   variables: { user: action },
    // });
    // console.log(resp, 'resppppp');

    // console.log('zzz ', state, act, ' zzzz');
    console.warn(state, 'state');
    return { ...state, userx: action.userModel };
  },
};
