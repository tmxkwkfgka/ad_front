import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!, $email: String!, $password: String!){
    createUser(
      username: $username,
      email: $email,
      password: $password

    ){

      username
      email
      password

    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String! ){
    login(
      email: $email,
      password: $password
    )
  }
`

export const ALL_USERS_QUERY = gql`
  query allUsersQuery {
    allUsers {
      id
      username
      email
    }
  }
`

export const USER_QUERY = gql`
  query fetchUserQuery($id: Int!){
    fetchUser(id: $id){
      id
      username
      email
      posts {
        id
      }
    }
  }
`
