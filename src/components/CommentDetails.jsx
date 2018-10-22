import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "@reach/router";

const CommentDetails = props => {
  const { created_by, _id, created_at, body } = props.comment;
  return (
    <>
      <span className="comment-details">
        <Link to={`/users/${created_by.username}`} className="comment-username">
          {created_by.username}
        </Link>
        <span className="comment-time">
          <span> posted </span>
          {moment().from(created_at, true)} ago
        </span>
        {created_by._id === props.userId && (
          <button
            className="delete-button"
            onClick={() => props.deleteComment(_id)}
          >
            delete
          </button>
        )}
      </span>

      <div className="comment-body">{body}</div>
    </>
  );
};

export default CommentDetails;

CommentDetails.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired
};
