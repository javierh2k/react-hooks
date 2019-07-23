export const CREATE_USER = `
mutation createUser($input: UserInput!){
  createUser(input: { data :$input }
  ) {
    user {
      username
      email
    }
  }
}
`;

export const UPDATE_USER = `
mutation updateUser($id: ID!, $input: editUserInput! ) {
  updateUser(input: {
      where: {
          id: $id
      },
      data:$input
  }) {
    user {
      username
      email
    }
  }
}
`;
