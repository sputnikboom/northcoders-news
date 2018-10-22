import React from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import moment from "moment";
import "../Articles.css";

const Articles = props => {
  return (
    <main className="article-list">
      {props.articles.map(article => {
        return (
          <div key={article._id} className="article-card-container">
            <VoteCount parent={article} type={"article"} />
            <h3>
              <Link to={`/articles/${article._id}`}>{article.title}</Link>
            </h3>
            <div className="article-card-details">
              <span> submitted by </span>
              <Link to={`/users/${article.created_by.username}`}>
                {article.created_by.username}
              </Link>
              <span> to </span>
              <Link to={`/topics/${article.belongs_to}`}>
                {article.belongs_to}
              </Link>
              <span> {moment().from(article.created_at, true)} ago</span>
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
