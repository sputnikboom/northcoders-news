import React, { Component } from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import CommentAdder from "./CommentAdder";
import { getListById } from "./api/get.js";
import { postComment } from "./api/post.js";
import { removeComment } from "./api/delete.js";
import "../Comments.css";
import CommentDetails from "./CommentDetails";

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    const { userId } = this.props;
    return (
      <main id="comments" className="comment-list">
        {userId && (
          <CommentAdder userId={userId} addComment={this.addComment} />
        )}
        {this.state.comments.map(comment => {
          return (
            <div key={comment._id} className="comment-container">
              <VoteCount parent={comment} type={"comment"} />
              <CommentDetails
                userId={userId}
                deleteComment={this.deleteComment}
                comment={comment}
              />
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
