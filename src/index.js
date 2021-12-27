import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import NewTransaction from './pages/transactions/NewTransaction';
import ViewTransaction from './pages/transactions/ViewTransaction';
import TransactionResult from './pages/transactions/TransactionResult';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_ENDPOINT,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction/new" element={<NewTransaction />} />
          <Route path="/transaction/result" element={<TransactionResult />} />
          <Route path="/transaction/:_id" element={<ViewTransaction />} />
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
