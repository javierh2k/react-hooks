export const GET_USERS = `
{
  users{
    id
    username
    email
    blocked
  }
}
`;

export const GET_USER = `
query user($id: ID!) {
  user(id: $id) {
    username
    email
    blocked
  }
}
`;
