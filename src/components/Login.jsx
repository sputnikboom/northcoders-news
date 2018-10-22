import React, { Component } from "react";
import { getUserByUsername } from "./api/users.js";
import PropTypes from "prop-types";

class Login extends Component {
  state = {
    username: "jessjelly"
  };

  render() {
    return (
      <form className="user-login" onSubmit={this.handleSubmit}>
        <label>Username:</label>{" "}
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />{" "}
        <button className="nav-button">Log In</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    getUserByUsername(this.state.username).then(user =>
      this.props.toggleLogin(user)
    );
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
}

Login.propTypes = {
  toggleLogin: PropTypes.func.isRequired
};

export default Login;
