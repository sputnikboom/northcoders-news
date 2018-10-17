import React from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import {Link} from '@reach/router'
import {formatDate} from './utils/index.js'

const Comments = props => {
  return (
    <main className="comment-list">
      {props.comments.map(comment => {
        return (
          <div className="comment-container">
            <VoteCount parent={comment} type={"comment"} />
            <Link to={`/users/${comment.created_by.username}`} className="comment-username">
              {comment.created_by.username}
            </Link>
            <span className="comment-time">{formatDate(comment.created_at)}</span>
            <div className="comment-body">{comment.body}</div>
          </div>
        );
      })}
    </main>
  );
};

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
