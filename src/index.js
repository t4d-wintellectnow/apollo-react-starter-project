import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'http://localhost:3030/graphql',
});

const stateLink = withClientState({
  cache,
  defaults: {
    app: {
      __typename: 'App',
    },
  },
  resolvers: {},
});

const link = ApolloLink.from([ stateLink, httpLink ]);

const client = new ApolloClient({
  link, cache, connectToDevTools: true,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
