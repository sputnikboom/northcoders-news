import React, { Component } from "react";
import PropTypes from "prop-types";
import { patchVote } from "./api/patch";

class VoteCount extends Component {
  state = {
    voteMod: 0
  };

  render() {
    const { voteMod } = this.state;
    return (
      <span className="vote-container">
        <button onClick={() => this.changeVote("up")} disabled={voteMod === 1}>
          Up
        </button>
        <p>{this.props.parent.votes + voteMod}</p>
        <button
          onClick={() => this.changeVote("down")} disabled={voteMod === -1}>
          Down
        </button>
      </span>
    );
  }

  changeVote = direction => {
    const { voteMod } = this.state;
    let voteChange = direction === "up" ? voteMod + 1 : voteMod - 1;
    this.setState({
      voteMod: voteChange
    });
    patchVote(this.props.parent._id, this.props.type, direction);
  };
}

VoteCount.propTypes = {
  parent: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default VoteCount;
