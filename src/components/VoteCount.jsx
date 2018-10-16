import React, { Component } from "react";
import PropTypes from "prop-types";

class VoteCount extends Component {
  state = {
    voteMod: 0
  };

  render() {
    const { voteMod } = this.state;
    console.log(this.props.parent);
    return (
      <span className="vote-container">
        <button onClick={() => this.changeVote("up")} disabled={voteMod === 1}>
          Up
        </button>
        <p>{this.props.parent.votes + voteMod}</p>
        <button onClick={() => this.changeVote("down")} disabled={voteMod === -1}>Down</button>
      </span>
    );
  }

  changeVote = direction => {
    const { voteMod } = this.state;
    let voteChange = direction === "up" ? voteMod + 1 : voteMod - 1;
    this.setState({
      voteMod: voteChange
    });
  };
}

VoteCount.propTypes = {
  parent: PropTypes.object
};

export default VoteCount;
