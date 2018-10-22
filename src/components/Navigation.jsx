import React from "react";
import SidebarButton from "./SidebarButton";
import Login from "./Login";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import LogOut from "./LogOut";

const Navigation = ({ username, toggleLogin }) => {
  return (
    <nav>
      <SidebarButton />
      {!username ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <div className="user-login">
          <button className="nav-button">
            <Link to={`/users/${username}`}>My Profile</Link>
          </button>
          <LogOut toggleLogin={toggleLogin} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  username: PropTypes.string.isRequired,
  toggleLogin: PropTypes.func.isRequired
};
