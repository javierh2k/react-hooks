export const CREATE_USER = `
mutation createUser($input: UserInput!){
  createUser(input: { data :$input }
  ) {
    employee {
      username
      email
      blocked
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
    employee {
      username
      email
      blocked
    }
  }
}
`;
