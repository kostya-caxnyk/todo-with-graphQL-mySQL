const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Todo {
    name: String!
    id: ID!
    isDone: Boolean!
    createdAt: String
    updatedAt: String
  }

  type Query {
    getTodos: [Todo!]!
  }

  input TodoInput {
    name: String!
  }

  type Mutation {
    createTodo(todo: TodoInput!):Todo!
    completeTodo(id: ID!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`);
