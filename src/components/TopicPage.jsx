import React, { Component } from "react";
import PropTypes from "prop-types";
import { getListById } from "./api/get";
import Articles from "./Articles";
import ArticleAdder from "./ArticleAdder";
import { postArticle } from "./api/post";
import { navigate } from "@reach/router";

class TopicPage extends Component {
  state = {
    articles: [],
    addArticle: false
  };

  render() {
    return (
      <>
      <div className="topic_container">
        <span className="topic-title">{this.props.topic_slug}</span>
        {this.props.userId &&
          !this.state.addArticle && (
            <button className="form-button" onClick={this.toggleInput}>Add Article</button>
          )}
        {this.state.addArticle && <ArticleAdder addArticle={this.addArticle} toggleInput={this.toggleInput}/>}
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
    getListById(topic, "topic", "articles").then(articles =>
      this.setState({ articles })
    );
  };

  addArticle = (body, title) => {
    postArticle(body, title, this.props.userId, this.props.topic_slug).then(
      newArticle =>
        navigate(`/articles/${newArticle._id}`)
    );
  };

  toggleInput = event => {
    this.setState({ addArticle: !this.state.addArticle });
  };
}

TopicPage.propTypes = {
  userId: PropTypes.string,
  updateTopic: PropTypes.func.isRequired
};

export default TopicPage;
