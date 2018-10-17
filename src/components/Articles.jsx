import React from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { formatDate } from "./utils";

const Articles = props => {
  return (
    <main className="article-list">
      {props.articles.map(article => {
        return (
          <div key={article._id} className="article-card-container">
            <VoteCount parent={article} type={"article"} />
            <Link to={`/articles/${article._id}`}>{article.title}</Link>
            <div className="article-card-details">
              <span>{formatDate(article.created_at)}</span>
              <Link to={`/users/${article.created_by.username}`}>
                {article.created_by.username}
              </Link>
              <Link to={`/topics/${article.belongs_to}`}>{article.belongs_to}</Link>
            </div>
            <span className="article-interactions">{`${
              article.comment_count
            } Comments`}</span>
          </div>
        );
      })}
    </main>
  );
};

Articles.propTypes = {
  articles: PropTypes.array
};

export default Articles;
