import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'Containers/App';
import client from 'Utils/apolloClient';
import styles from 'Styles/index.scss';

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App className={styles.App} />
    </ApolloProvider>
  </Router>,
  document.getElementById('core'),
);
