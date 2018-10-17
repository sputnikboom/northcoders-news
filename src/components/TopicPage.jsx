import React, { Component } from "react";
import PropTypes from "prop-types";
import { getListById } from "./api/get";
import Articles from "./Articles";
import TopicAdder from "./TopicAdder";
import { postArticle } from "./api/post";

class TopicPage extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <>
        {this.props.userId && <TopicAdder addArticle={this.addArticle} />}
        <Articles articles={this.state.articles} />
      </>
    );
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
    getListById(topic, "topic", "articles").then(articles =>
      this.setState({ articles })
    );
  };

  addArticle = (body, title) => {
    postArticle(body, title, this.props.userId, this.props.topic_slug).then(
      newArticle =>
        this.setState({ articles: [newArticle, ...this.state.articles] })
    );
  };
}

TopicPage.propTypes = {
  topic_slug: PropTypes.string,
  userId: PropTypes.string
};

export default TopicPage;
