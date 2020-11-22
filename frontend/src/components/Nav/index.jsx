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
        <Query query={CATEGORIES_QUERY} id={null}>
          {({ data: { categories } }) => (
            <div>
              <div className="left-logo uk-flex uk-flex-middle">
                <img className="custom-logo" src="img/dashboard-logo.svg" alt="" />
              </div>
              <div className="left-content-box  content-box-dark">
                <img src="img/avatar.svg" alt="" className="uk-border-circle profile-img" />
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
                <ul className="uk-nav uk-nav-default uk-nav-parent-icon" data-uk-nav>
                  <li className="uk-nav-header">ACTIONS</li>
                  <li>
                    <a href="#">
                      <span data-uk-icon="icon: comments" className="uk-margin-small-right" />
                      Messages
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span data-uk-icon="icon: users" className="uk-margin-small-right" />
                      Friends
                    </a>
                  </li>
                  <li className="uk-parent">
                    <a href="#">
                      <span data-uk-icon="icon: thumbnails" className="uk-margin-small-right" />
                      Templates
                    </a>
                    <ul className="uk-nav-sub">
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
                  </li>
                  <li>
                    <a href="#">
                      <span data-uk-icon="icon: album" className="uk-margin-small-right" />
                      Albums
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span data-uk-icon="icon: thumbnails" className="uk-margin-small-right" />
                      Featured Content
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span data-uk-icon="icon: lifesaver" className="uk-margin-small-right" />
                      Tips
                    </a>
                  </li>
                  <li className="uk-parent">
                    <a href="#">
                      <span data-uk-icon="icon: comments" className="uk-margin-small-right" />
                      Reports
                    </a>
                    <ul className="uk-nav-sub">
                      <li><a href="#">Sub item</a></li>
                      <li><a href="#">Sub item</a></li>
                    </ul>
                  </li>
                </ul>
                <div className="left-content-box uk-margin-top">

                  <h5>Daily Reports</h5>
                  <div>
                    <span className="uk-text-small">
                      Traffic
                      {' '}
                      <small>(+50)</small>
                    </span>
                    <progress className="uk-progress" value="50" max="100" />
                  </div>
                  <div>
                    <span className="uk-text-small">
                      Income
                      {' '}
                      <small>(+78)</small>
                    </span>
                    <progress className="uk-progress success" value="78" max="100" />
                  </div>
                  <div>
                    <span className="uk-text-small">
                      Feedback
                      {' '}
                      <small>(-12)</small>
                    </span>
                    <progress className="uk-progress warning" value="12" max="100" />
                  </div>

                </div>

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
            </div>
          )}
        </Query>
      </aside>
    );
  }
}

export default Nav;
