import React from "react";
import PropTypes from "prop-types";

const LogOut = ({ toggleLogin }) => {
  return (
    <button className="nav-button" onClick={() => toggleLogin()}>
      Log Out
    </button>
  );
};

LogOut.propTypes = {
  toggleLogin: PropTypes.func.isRequired
};

export default LogOut;
