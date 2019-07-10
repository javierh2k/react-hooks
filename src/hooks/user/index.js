import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import fetch from 'isomorphic-fetch';
import { GraphQLClient } from 'graphql-request';
import { GET_USERS, GET_USER } from '../../services/user/queries';
import { URL } from '../../config';
// import 'isomorphic-fetch'

export const client = new GraphQLClient(URL, {
  // headers: {
  //   Authorization: 'Bearer my-jwt-token',
  // },
});

async function getUser(id) {
  let result = [];
  let errorQuery = '';

  try {
    result = await client.request(GET_USER, { id });
    console.log(result, '+++');
    if (result.errors) throw result.errors[0];
  } catch (error) {
    errorQuery = error;
  }

  return { error: errorQuery, data: result || false };
}

async function getAlllUsers() {
  let result = [];
  let errorQuery = '';

  try {
    result = await client.request(GET_USERS);
    if (result.errors) throw result.errors[0];
    // return { data: result };
  } catch (error) {
    errorQuery = error;
  }

  // console.log(errorQuery, 'errorQuery', result);
  return { error: errorQuery, data: result || false };
}

export function useAllUsers(serverData) {
  if (serverData) {
    console.log('from server');
    return getAlllUsers();
  }

  console.log('from apollo');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(gql(GET_USERS));
}

export function useUser(id, serverData) {
  if (serverData) {
    console.log('from server');
    return getUser(id);
  }

  console.log('from apollo');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(gql(GET_USER));
}
