import React from 'react';
import { Link } from 'react-router-dom';
import Query from 'Query';

import CATEGORIES_QUERY from 'Queries/category/categories';

const Nav = () => (
  <div>
    <Query query={CATEGORIES_QUERY} id={null}>
      {({ data: { categories } }) => (
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li>
                  <Link to="/">Strapi Blog</Link>
                </li>
              </ul>
            </div>

            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                {categories.map((category, i) => (
                  <li key={category.id}>
                    <Link
                      to={`/category/${category.id}`}
                      className="uk-link-reset"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </Query>
  </div>
);

export default Nav;
