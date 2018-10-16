import React from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import {Link} from "@reach/router";

const ArticleList = props => {
  return (
    <main className="article-list">
      {props.articles.map(article => {
        return (
          <div key={article._id} className="article-card-container">
            <VoteCount parent={article} type={"article"}/>
            <h3>{article.title}</h3>
            <div className="article-card-details">
              <span>{article.created_at}</span>
              <Link to={`/users/${article.created_by.username}`}>{article.created_by.username}</Link>
              <span>{article.belongs_to}</span>
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

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default ArticleList;
