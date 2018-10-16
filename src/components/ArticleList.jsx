import React from "react";
import VoteCount from "./VoteCount";

const ArticleList = (props) => {
  return (
    <main className="article-list">
      {props.articles.map(article => {
      return (<div key={article._id} className="article-card-container">
        <VoteCount />
        <h3>{article.title}</h3>
        <div className="article-card-details">
          <span>{article.created_at}</span>
          <span>{article.created_by.username}</span>
          <span>{article.belongs_to}</span>
        </div>
        <span className="article-interactions">{`${article.comment_count} Comments`}</span>
      </div>)
      })}
    </main>
  );
};

export default ArticleList;
