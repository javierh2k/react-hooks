export const CREATE_EMPLOYEE = `
mutation createEmployee($input: EmployeeInput!){
  createEmployee(input: { data :$input }
  ) {
    employee {
      id
      name
      lastname
      email
    }
  }
}
`;

export const UPDATE_EMPLOYEE = `
mutation updateEmployee($id: ID!, $input: editEmployeeInput! ) {
  updateEmployee(input: {
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
