export const GET_USERS = `
{
  employees{
    id
    name
    lastname
    email
  }
}
`;

export const GET_USER = `
query employee($id: ID!) {
  employee(id: $id) {
    name
    lastname
    email
  }
}
`;
