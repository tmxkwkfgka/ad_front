// app/data/schema.js

'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// Define our schema using the GraphQL schema language
const typeDefs = `
  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
    posts: [Post]
  }
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    user: User!
  }
  type Title {
    title: String
    stage: String
    classify: String
    link: String
    startDate: String
    endDate: String
  }
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    allPosts: [Post]
    fetchPost(id: Int!): Post
    fetchTitles: [Title]
    fetchOneMonth: [Title]

  }
  type Mutation {
    login (email: String!, password: String!): String
    createUser (id: Int!, username: String!, email: String!, password: String!): User
    addPost (title: String!, content: String!): Post
  }
`
//user cannot be null or empty
module.exports = makeExecutableSchema({ typeDefs, resolvers })
