import React, { Component } from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

class ArticleAdder extends Component {
  state = {
    title: "",
    body: "",
    inputWarning: false
  };

  render() {
    return (
      <>
        {this.state.inputWarning && (
          <div>New articles must have a title and a body</div>
        )}
        {this.props.userId && (
          <form className="article-form" onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <label>Article:</label>
            <textarea
              name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <button className="form-button">Add Article</button>
            <button className="form-button" onClick={this.props.toggleInput}>
              Cancel
            </button>
          </form>
        )}
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      this.props.addArticle(this.state.body, this.state.title);
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
}

ArticleAdder.propTypes = {
  addArticle: PropTypes.func
};

export default ArticleAdder;
