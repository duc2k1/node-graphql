import { gql } from "apollo-server-express";

const typeDefs = [
  gql`
    type Book {
      id: ID!
      name: String
      genre: String
    }
    type Query {
      books: [Book]
    }
  `,
  gql`
    type People {
      id: ID!
      name: String
      genre: String
    }
    type Query {
      peoples: [People]
    }
  `,
];

export default typeDefs;
