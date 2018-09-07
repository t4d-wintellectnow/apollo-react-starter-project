// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { createServer } from 'http';

// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools';
// import { PubSub } from 'graphql-subscriptions';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { execute, subscribe } from 'graphql';

import { ApolloServer } from 'apollo-server';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const PORT = 3030;
const REST_SERVER_URL = 'http://localhost:3040';

const context = {
    restURL: REST_SERVER_URL,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen({
  port: PORT,
}).then( ({ url }) => {
  console.log(`graphql server url: ${url}`);
} );
