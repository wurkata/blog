import React from 'react';
import Articles from 'Components/Articles';
import Query from 'Components/Query';
import ARTICLES_QUERY from 'Queries/article/articles';

const Home = () => (
  <div id="content" data-uk-height-viewport="expand: true">
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        <h1>Strapi blog</h1>
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }) => <Articles articles={articles} />}
        </Query>
      </div>
    </div>
  </div>
);

export default Home;
