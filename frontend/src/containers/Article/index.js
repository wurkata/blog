import React from 'react';
import Query from '../../components/Query';
import Header from '../../components/Header';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import Disqus from 'disqus-react';

import ARTICLE_QUERY from '../../queries/article/article';
import { Error404 } from '../../defaults/error404';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      article: props.article,
      skip: props.article === undefined,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { id } = this.state;
    return (
      <Query query={ARTICLE_QUERY} id={id}>
        {({ data: { article } }) => {
          if (article != null) {
            const imageUrl =
              process.env.NODE_ENV !== 'development'
                ? article.banner_image.image.url
                : process.env.REACT_APP_BACKEND_URL +
                  article.banner_image.image.url;
            return (
              <div id="main">
                <Header
                  headerData={{
                    page: 'article',
                    imageUrl: imageUrl,
                    title: article.title,
                  }}
                  adsData={{
                    contrib: article.banner_image.contributions,
                    reference: article.banner_image.reference,
                  }}
                />
                <div className="uk-section">
                  <div className="uk-container uk-container-small">
                    <ReactMarkdown source={article.content} />
                    <p>
                      <Moment className="uk-text-meta" format="MMM Do YYYY">
                        {article.published_at}
                      </Moment>
                    </p>
                    <hr />
                    <Disqus.DiscussionEmbed
                      shortname="yoku-bg"
                      config={{
                        url: `https://localhost:3000/ + ${this.props.match.url}`,
                        identifier: article.id,
                        title: article.title,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          } else {
            return <Error404 page="Article" />;
          }
        }}
      </Query>
    );
  }
}

export default Article;
