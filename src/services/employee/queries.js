export const GET_EMPLOYEES = `
{
  employees{
    id
    name
    lastname
    email
  }
}



`;

export const GET_EMPLOYEE = `
query employee($id: ID!) {
  employee(id: $id) {
    name
    lastname
    email
    category {
      id
    }
  }

  categories{
    id
    name
    order
  }

}
 
`;
