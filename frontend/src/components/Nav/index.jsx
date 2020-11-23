import React from 'react';
import { Link } from 'react-router-dom';
import Query from 'Components/Query';

import CATEGORIES_QUERY from 'Queries/category/categories';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <aside id="left-col" className="uk-light uk-visible@m">
        <div className="left-logo uk-flex uk-flex-middle">
          <h4 className="uk-text-center uk-margin-remove-vertical text-light">Blog name</h4>
        </div>
        <div className="left-content-box  content-box-dark">
          <h4 className="uk-text-center uk-margin-remove-vertical text-light">John Doe</h4>

          <div className="uk-position-relative uk-text-center uk-display-block">
            <a href="#" className="uk-text-small uk-text-muted uk-display-block uk-text-center" data-uk-icon="icon: triangle-down; ratio: 0.7">Admin</a>
            <div className="uk-dropdown user-drop" data-uk-dropdown="mode: click; pos: bottom-center; animation: uk-animation-slide-bottom-small; duration: 150">
              <ul className="uk-nav uk-dropdown-nav uk-text-left">
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: info" />
                    {' '}
                    Summary
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: refresh" />
                    {' '}
                    Edit
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: settings" />
                    {' '}
                    Configuration
                  </a>
                </li>
                <li className="uk-nav-divider" />
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: image" />
                    {' '}
                    Your Data
                  </a>
                </li>
                <li className="uk-nav-divider" />
                <li>
                  <a href="#">
                    <span data-uk-icon="icon: sign-out" />
                    {' '}
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="left-nav-wrap">
          <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => (
              <ul className="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
                <li className="uk-nav-header">CATEGORIES</li>
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
            )}
          </Query>
        </div>
        <div className="bar-bottom">
          <ul className="uk-subnav uk-flex uk-flex-center uk-child-width-1-5" data-uk-grid>
            <li>
              <a href="#" className="uk-icon-link" data-uk-icon="icon: home" title="Home" data-uk-tooltip />
            </li>
            <li>
              <a href="#" className="uk-icon-link" data-uk-icon="icon: settings" title="Settings" data-uk-tooltip />
            </li>
            <li>
              <a href="#" className="uk-icon-link" data-uk-icon="icon: social" title="Social" data-uk-tooltip />
            </li>

            <li>
              <a href="#" className="uk-icon-link" data-uk-tooltip="Sign out" data-uk-icon="icon: sign-out" />
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Nav;
