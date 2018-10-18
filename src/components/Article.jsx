import React, { Component } from "react";
import PropTypes from "prop-types";
import { getOneById } from "./api/get.js";
import Comments from "./Comments";

class Article extends Component {
  state = {
    article: {}
  };

  render() {
    return (
      <main>
        <h2>{this.state.article.title}</h2>
        <div>{this.state.article.body}</div>
        <Comments
          comments={this.state.comments}
          userId={this.props.userId}
          article_id={this.props.article_id}
        />
      </main>
    );
  }

  componentDidMount() {
    return getOneById(this.props.article_id, "article").then(article => {
      this.setState({
        article
      });
    });
  }
}

Article.propTypes = {
  artice_id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};

export default Article;
