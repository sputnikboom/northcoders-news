import React from "react";
import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
import "../Articles.css";
import ArticleDetails from "./ArticleDetails";

const Articles = props => {
  return (
    <main className="article-list">
      {props.articles.map((article, i) => {

        return (
          <div key={article._id} className="article-card-container">
            <VoteCount parent={article} type={"article"} />
            <ArticleDetails article={article} />
            {i !== props.articles.length - 1 && (
              <div className="article-divider" />
            )}
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
