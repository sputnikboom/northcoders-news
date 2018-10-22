import React, { Component } from "react";
import PropTypes from "prop-types";
import { getArticlesByTopic } from "./api/articles.js";
import Articles from "./Articles";

import {Link} from '@reach/router';

import "../Articles.css";

class TopicPage extends Component {
  state = {
    articles: [],
    addArticle: false
  };

  render() {
    return (
      <>
        <div className="topic-container">
          <span className="topic-title">{this.props.topic_slug}</span>
          {this.props.userId &&
            !this.state.addArticle && (
              <Link to={`/topics/${this.props.topic_slug}/new-article`} state={{addArticle: this.props.addArticle}}><button className="form-button">
                Add Article
              </button></Link>
            )}
        </div>
        <Articles articles={this.state.articles} />
      </>
    );
  }

  componentDidMount() {
    this.props.updateTopic(this.props.topic_slug);
    this.getArticles(this.props.topic_slug);
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic_slug !== prevProps.topic_slug) {
      this.props.updateTopic(this.props.topic_slug);
      this.getArticles(this.props.topic_slug);
    }
  }

  getArticles = topic => {
    getArticlesByTopic(topic).then(articles => this.setState({ articles }));
  };
}

TopicPage.propTypes = {
  userId: PropTypes.string,
  updateTopic: PropTypes.func.isRequired
};

export default TopicPage;
