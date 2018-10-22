import React, { Component } from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { postArticle } from "./api/articles.js";

class ArticleAdder extends Component {
  state = {
    title: "",
    body: "",
    inputWarning: false
  };

  render() {
    return (
      <main>
        {this.props.userId && (
          <form className="article-form" onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <input
              className="title-input"
              name="title"
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <label>Article:</label>
            <textarea
              className="body-input"
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <button className="form-button submit">Add Article</button>
            {this.state.inputWarning && (
              <div>New articles must have a title and a body</div>
            )}
          </form>
        )}
      </main>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      this.addArticle(this.state.body, this.state.title);
      this.setState({
        body: "",
        title: "",
        inputWarning: false
      });
    } else this.setState({ inputWarning: true });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addArticle = (body, title) => {
    postArticle(body, title, this.props.userId, this.props.topic_slug).then(
      newArticle => navigate(`/articles/${newArticle._id}`)
    );
  };
}

ArticleAdder.propTypes = {
  addArticle: PropTypes.func
};

export default ArticleAdder;
