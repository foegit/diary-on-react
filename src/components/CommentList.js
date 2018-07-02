import React from 'react';

import Comment from '../components/Comment';

const CommentList = (props) => {
    const { comments } = props;
    return(
      <div className="comments-list">
      {comments.map(comment=>
      <Comment
        key={comment.id}
        title={comment.title}
        color={comment.author}/>)}
        </div>
    );
  }
export default CommentList;
