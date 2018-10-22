import React, { Component } from "react";
import PropTypes from "prop-types";
import { getOneById } from "./api/get.js";
import Comments from "./Comments";
import "../Article.css";
import VoteCount from "./VoteCount.jsx";

class Article extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    return (
      <>
        <main className="article-container">
          <span className="article-header">
          {this.state.article._id &&
            <VoteCount
              className="article-votes"
              parent={this.state.article}
              type={"article"}
            />
            }
            <h2 className="article-title">{this.state.article.title}</h2>
          </span>{" "}
          <p className="article-body">{this.state.article.body}</p>
        </main>
        <div className="body-divider" />
        <Comments
          comments={this.state.comments}
          userId={this.props.userId}
          article_id={this.props.article_id}
        />
      </>
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
  artice_id: PropTypes.string,
  userId: PropTypes.string
};

export default Article;
