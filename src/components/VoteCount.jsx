import React, { Component } from "react";
import PropTypes from "prop-types";
import { patchArticleVote } from "./api/articles.js";
import { patchCommentVote } from "./api/comments.js"
import "../VoteCount.css";

class VoteCount extends Component {
  state = {
    voteMod: 0,
    hasVoted: null
  };

  render() {
    const { voteMod } = this.state;
    return (
      <span className="vote-container">
        <button
          className={`vote-up voted-${this.state.hasVoted}`}
          onClick={() => this.changeVote("up")}
        >
          <i className="material-icons">arrow_upward</i>
        </button>
        <div className="vote-score">{this.props.parent.votes + voteMod}</div>
        <button
          className={`vote-down voted-${this.state.hasVoted}`}
          onClick={() => this.changeVote("down")}
        >
          <i className="material-icons">arrow_downward</i>
        </button>
      </span>
    );
  }

  changeVote = direction => {
    const { voteMod } = this.state;
    let voteChange = voteMod !== 0 ? 0
    : direction === "up"
    ? voteMod + 1 
    : voteMod + -1
    this.setState({
      voteMod: voteChange,
      hasVoted: this.state.hasVoted === direction ? null : direction
    });
    this.props.type === "comment"
    ? patchCommentVote(this.props.parent._id, direction)
    : patchArticleVote(this.props.parent._id, direction);
  };
}

VoteCount.propTypes = {
  parent: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default VoteCount;
