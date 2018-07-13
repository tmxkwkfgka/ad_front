import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($id: Int!, $username: String!, $email: String!, $password: String!){
    createUser(
      id: $id,
      username: $username,
      email: $email,
      password: $password

    ){
      id
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

export const ALL_TITLES_QUERY = gql`
  query allTitlesQuery {
    fetchTitles {
      title
      stage
      classify
      link
    }
  }
`
export const ALL_TITLES_ONEMONTH_QUERY = gql`
  query fetchOneMonth {
    fetchOneMonth {
      title
      stage
      classify
      link
    }
  }
`
