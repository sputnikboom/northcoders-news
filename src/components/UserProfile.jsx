import React, { Component } from "react";
import { getUserByUsername } from "./api/users.js";
import PropTypes from "prop-types";
import defaultImg from "../assets/default-user.png";

class UserProfile extends Component {
  state = {
    user: {}
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <h2>{user.username}'s Profile</h2>
        <div>{user.username}</div>
        <div>{user.name}</div>
        <img
          onError={error => (error.target.src = defaultImg)}
          src={user.avatar_url}
          alt={`${user.username}'s avatar`}
        />
      </div>
    );
  }

  componentDidMount() {
    getUserByUsername(this.props.user_id)
      .then(user => {
        this.setState({ user });
      })
      .catch(err => {
        this.props.navigate("/error", {
          replace: true,
          state: { err: err.message }
        });
      });
  }

  getImage;
}

UserProfile.propTypes = {
  userId: PropTypes.string
};

export default UserProfile;
