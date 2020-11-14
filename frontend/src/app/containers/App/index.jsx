import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import client from '../../utils/apolloClient';

function App() {
  return (
    <div className="App">
      <div>Hello, worl!</div>
      <Router>
        <ApolloProvider client={client} />
      </Router>
    </div>
  );
}

export default hot(App);
