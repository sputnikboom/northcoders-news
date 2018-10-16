import React from 'react';
import VoteCount from './VoteCount';

const CommentList = () => {
    return (
        <main className="comment-list">
        <div className="comment-container">
            <VoteCount/>
            <span className="comment-username">Username</span>
            <span className="comment-time">Time of Comment</span>
            <div className="comment-body">Comment Body</div>
        </div>
        </main>
    )
}

export default CommentList;