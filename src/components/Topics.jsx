import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import "../Menu.css";

function Topics(props) {
  return (
    <ul>
      <li className="all-topics">
        <Link to="/">All Topics</Link>
      </li>
      {props.topics.map(topic => {
        return (
          <li key={topic.title}>
            <Link to={`/topics/${topic.slug}`}>{topic.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

Topics.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Topics;
