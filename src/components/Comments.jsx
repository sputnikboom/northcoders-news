import React, { Component } from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { formatDate } from "./utils/index.js";
import CommentAdder from "./CommentAdder";
import { getListById } from "./api/get.js";
import { postComment } from "./api/post.js";
import { removeComment } from "./api/delete.js";
import "../Comments.css";

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    return (
      <main id="comments" className="comment-list">
        {this.props.userId && (
          <CommentAdder
            userId={this.props.userId}
            addComment={this.addComment}
          />
        )}
        {this.state.comments.map(comment => {
          return (
            <div key={comment._id} className="comment-container">
              <VoteCount parent={comment} type={"comment"} />
              <span className="comment-details">
                <Link
                  to={`/users/${comment.created_by.username}`}
                  className="comment-username"
                >
                  {comment.created_by.username}
                </Link>
                <span className="comment-time">
                  <span> posted at </span>
                  {formatDate(comment.created_at)}
                </span>
                {comment.created_by._id === this.props.userId && (
                  <button onClick={() => this.deleteComment(comment._id)}>
                    delete
                  </button>
                )}
              </span>

              <div className="comment-body">{comment.body}</div>
            </div>
          );
        })}
      </main>
    );
  }

  componentDidMount() {
    getListById(this.props.article_id, "article", "comments").then(comments => {
      this.setState({
        comments
      });
    });
  }

  addComment = body => {
    postComment(body, this.props.userId, this.props.article_id).then(
      newComment => {
        this.setState({
          comments: [newComment, ...this.state.comments]
        });
      }
    );
  };

  deleteComment = commentId => {
    removeComment(commentId).then(removedComment => {
      this.setState({
        comments: this.state.comments.filter(
          comment => comment._id !== removedComment._id
        )
      });
    });
  };
}

Comments.propTypes = {
  comments: PropTypes.array,
  userId: PropTypes.string
};

export default Comments;
