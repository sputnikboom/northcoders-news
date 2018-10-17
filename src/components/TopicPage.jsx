import React, { Component } from "react";
import PropTypes from "prop-types";
import { getListById } from "./api/get";
import Articles from "./Articles";

class TopicPage extends Component {
  state = {
    articles: []
  };

  render() {
    return <Articles articles={this.state.articles} userId={this.props.userId}/>;
  }

  componentDidMount() {
    this.getArticles(this.props.topic_slug);
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic_slug !== prevProps.topic_slug) {
      this.getArticles(this.props.topic_slug);
    }
  }

  getArticles = topic => {
    getListById(topic, "topic", "articles").then(
      articles => this.setState({ articles }),
      () => console.log(this.state.articles)
    );
  };
}

TopicPage.propTypes = {
  topic_slug: PropTypes.string,
};

export default TopicPage;
