import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createNetworkInterface } from 'apollo-client';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import App from './App';

const networkInterface = createNetworkInterface({
  uri: "https://mpjk0plp9.lp.gql.zone/graphql",
});

const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root'),
);
