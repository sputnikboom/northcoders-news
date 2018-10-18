import React, { Component } from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { formatDate } from "./utils/index.js";
import CommentAdder from "./CommentAdder";
import { getListById } from "./api/get.js";
import { postComment } from "./api/post.js";
import "../Comments.css";

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    console.log(this.state.comments);
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
    console.log("???");
    postComment(body, this.props.userId, this.props.article_id).then(
      newComment => {
        this.setState({
          comments: [newComment, ...this.state.comments]
        });
      }
    );
  };
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired
};

export default Comments;
