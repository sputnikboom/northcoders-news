import React, { Component } from "react";
import PropTypes from "prop-types";
import { patchVote } from "./api/patch";
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
    patchVote(this.props.parent._id, this.props.type, direction);
  };
}

VoteCount.propTypes = {
  parent: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default VoteCount;
