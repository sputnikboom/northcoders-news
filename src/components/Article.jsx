import React, { Component } from "react";
import PropTypes from "prop-types";
import { getListById, getOneById } from "./api/get.js";
import Comments from "./Comments";

class Article extends Component {
  state = {
    comments: [],
    article: {}
  };

  render() {
    return (
      <main>
        <h2>{this.state.article.title}</h2>
        <div>{this.state.article.body}</div>
        <Comments comments={this.state.comments} />
      </main>
    );
  }

  componentDidMount() {
    return Promise.all([
      getOneById(this.props.article_id, "article"),
      getListById(this.props.article_id, "article", "comments")
    ]).then(([article, comments]) => {
      this.setState({
        comments, article
      })
    });
  }
}

Article.propTypes = {
  artice_id: PropTypes.string
};

export default Article;
