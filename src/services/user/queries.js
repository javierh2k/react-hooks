export const GET_USERS = `
 {
    allUsers {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_USER = `
($id: ID!) {
  User(id: $id) {
    id
    firstName
    lastName
    email
  }
 }
`;
