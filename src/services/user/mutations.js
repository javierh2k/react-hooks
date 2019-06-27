export const CREATE_USER = `
mutation createUser($user: User){
    createUser(user:$user){
        id
        firstName
        lastName
        email
    }    
}
`;

/** 
 * 
  mutation SubmitRepo ($repoFullName: String!) {
    submitRepository (repoFullName: $repoFullName) {
      id,
      score,
    }
  }

 */
