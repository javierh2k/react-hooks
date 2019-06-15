import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { createApolloFetch } from 'apollo-fetch';
import { GET_USERS } from '../../services/user/queries';
import { URL } from '../../config';

export const fetch = createApolloFetch({
  uri: URL,
});

export function useAllUsers(serverData) {
  if (serverData) {
    console.log('from server');
    return { data: serverData };
  }

  console.log('from apollo');
  return useQuery(gql(GET_USERS));
}
