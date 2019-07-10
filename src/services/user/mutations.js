export const CREATE_USER = `
mutation createEmployees($input: EmployeesInput!){
  createEmployees(input: { data :$input }
  ) {
    employee {
      name
      lastname
      email
    }
  }
}
`;

export const UPDATE_USER = `
mutation updateEmployees($id: ID!, $input: editEmployeesInput! ) {
  updateEmployees(input: {
      where: {
          id: $id
      },
      data:$input
  }) {
    employee {
      name
      lastname
      email
    }
  }
}
`;
