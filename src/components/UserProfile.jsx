import React, { Component } from "react";
// import { Link } from "@reach/router";
import {getOneById} from "./api/get.js";
import PropTypes from 'prop-types';

class UserProfile extends Component {

  state = {
    user: {}
  }

  render() {
    const {user} = this.state;
    return (
      <div>
        <h2>User Profile</h2>
        <div>{user.username}</div>
        <div>{user.name}</div>
        <img src={user.avatar_url} alt={`${user.username}'s avatar`}/>

        {/* <nav className="sub-nav">
          <Link to="./comments">Comments</Link>
          <Link to="./articles">Articles</Link>
        </nav>
        {this.props.children} */}
      </div>
    );
  }

  componentDidMount() {
    getOneById(this.props.user_id, "user").then(user => {this.setState({ user })});
  }

}

UserProfile.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserProfile;
