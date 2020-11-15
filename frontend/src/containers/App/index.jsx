import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Nav from 'Components/Nav';
import Articles from 'Containers/Articles';
import Article from 'Containers/Article';
import Category from 'Containers/Category';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
