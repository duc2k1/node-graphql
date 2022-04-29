import { ApolloServer } from "apollo-server-express";
import express from "express";
import resolvers from "./resolver/resolver.js";
import typeDefs from "./schema/schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
await server.start();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000/graphql`);
});
