import React, { Component } from "react";
import { Link } from "@reach/router";
import {getTypeById} from "./api/get.js";

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

        <nav className="sub-nav">
          <Link to="./comments">Comments</Link>
          <Link to="./articles">Articles</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    getTypeById(this.props.userId, "user").then(user => {this.setState({ user })});
  }

}

export default UserProfile;
