export const CREATE_USER = `

mutation{
    createUser($user: User){
        id
        firstName
        lastName
        email
    }
}

`;
