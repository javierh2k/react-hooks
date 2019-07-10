import { GraphQLClient } from 'graphql-request';
import { URL } from '../config';

export const client = new GraphQLClient(URL, {
  // headers: {
  //   Authorization: 'Bearer my-jwt-token',
  // },
});
