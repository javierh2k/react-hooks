import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { createApolloFetch } from 'apollo-fetch';
import { GET_USERS } from '../../services/user/queries';
import { URL } from '../../config';

export const fetch = createApolloFetch({
  uri: URL,
});

async function getQuery() {
  let result = [];
  let errorQuery = '';

  try {
    result = await fetch({
      query: `query ${GET_USERS}`,
      variables: { id: 1 },
    });
  } catch (error) {
    console.log('error:', error.message);
    errorQuery = error.message;
  }
  console.log(result.data);
  return { error: errorQuery, data: result.data || false };
}

export function useAllUsers(serverData) {
  if (serverData) {
    console.log('from server');
    return getQuery();
  }

  console.log('from apollo');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(gql(GET_USERS));
}
