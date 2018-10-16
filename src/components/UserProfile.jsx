import React, { Component } from "react";
import { Link } from "@reach/router";
import {getOneById} from "./api/get.js";
import PropTypes from 'prop-types';

class UserProfile extends Component {

  state = {
    user: {}
  }

  render() {
    return (
      <div>
        <h2>User Profile</h2>
        <div>{this.state.user.username}</div>
        <div>{this.state.user.name}</div>
        <img src={this.state.user.avatar_url} alt="avatar"/>

        {/* <nav className="sub-nav">
          <Link to="./comments">Comments</Link>
          <Link to="./articles">Articles</Link>
        </nav>
        {this.props.children} */}
      </div>
    );
  }

  componentDidMount() {
    getOneById(this.props.userId, "user").then(user => {this.setState({ user })});
  }

}

UserProfile.propTypes = {
  userId: PropTypes.string
}

export default UserProfile;
