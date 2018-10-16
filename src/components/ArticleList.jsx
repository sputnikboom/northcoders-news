import React from "react";
import VoteCount from "./VoteCount";

const ArticleList = () => {
  return (
    <main>
      <div className="article-card-container">
        <VoteCount />
        <h3>Title</h3>
        <div className="article-card-details">
          <span>Time</span>
          <span>User</span>
          <span>Topic</span>
        </div>
        <span className="article-interactions">Comments</span>
      </div>
    </main>
  );
};

export default ArticleList;
