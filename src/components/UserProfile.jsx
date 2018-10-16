import React, { Component } from "react";
import { Link } from "@reach/router";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h2>User Profile</h2>
        <div>Username</div>
        <div>UserInfo</div>
        <img src="https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg" />

        <nav>
          <Link to="./comments">Comments</Link>
          <Link to="./articles">Articles</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default UserProfile;
