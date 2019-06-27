import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
// import ApolloClient from 'apollo-boost;
// import { createApolloFetch } from 'apollo-fetch';
import { HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import { GET_USERS, GET_USER } from '../../services/user/queries';
import { URL } from '../../config';
// import 'isomorphic-fetch'

export const httpl = new HttpLink({
  url: URL,
  fetch,
});

/**  
 * import ApolloClient from 'apollo-boost'


const client = new ApolloClient({
  uri: 'endpoint-url-here'
})


function httpLink({ apiUrl, idToken }) {
  return new HttpLink({
    uri: apiUrl,
    headers: {
      authorization: `Bearer ${idToken}`,
    },
    fetch
  })
}


*/

// export const fetch = new ApolloClient({
//   uri: URL,
// });

// export const fetch = createApolloFetch({
//   uri: URL,
// });

async function getUser(id) {
  let result = [];
  let errorQuery = '';

  try {
    result = await fetch({
      query: `query ${GET_USER}`,
      variables: { id },
    });
    console.log(result, '+++');
    if (result.errors) throw result.errors[0];
  } catch (error) {
    errorQuery = error;
  }

  return { error: errorQuery, data: result.data || false };
}

async function getAlllUsers() {
  let result = [];
  let errorQuery = '';

  try {
    result = await fetch({
      query: `query ${GET_USERS}`,
    });
    if (result.errors) throw result.errors[0];
  } catch (error) {
    errorQuery = error;
  }

  // console.log(errorQuery, 'errorQuery', result);
  return { error: errorQuery, data: result.data || false };
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
