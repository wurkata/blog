import React from 'react';
import { useParams } from 'react-router';
import Articles from 'Components/Articles';
import Query from 'Components/Query';
import CATEGORY_ARTICLES_QUERY from 'Queries/category/articles';

const Category = () => {
  const { id } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} id={id}>
      {({ data: { category } }) => (
        <div>
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <h1>{category.name}</h1>
              <Articles articles={category.articles} />
            </div>
          </div>
        </div>
      )}
    </Query>
  );
};

export default Category;
