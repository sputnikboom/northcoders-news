import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import moment from "moment";

const ArticleDetails = props => {
  const {
    _id,
    title,
    created_by,
    belongs_to,
    created_at,
    comment_count
  } = props.article;

  return (
    <>
      <h3>
        <Link to={`/articles/${_id}`}>{title}</Link>
      </h3>
      <div className="article-card-details">
        <span> submitted by </span>
        <Link to={`/users/${created_by.username}`}>{created_by.username}</Link>
        <span> to </span>
        <Link to={`/topics/${belongs_to}`}>{belongs_to}</Link>
        <span> {moment().from(created_at, true)} ago</span>
      </div>
      <Link to={`/articles/${_id}#comments`}className="article-interactions">{`${comment_count} Comments`}</Link>
    </>
  );
};

ArticleDetails.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleDetails;
