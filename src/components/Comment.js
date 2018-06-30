import React from 'react';

const Comment = (props) =>
<div className="comment">
    <div className="icon" style={{backgroundColor: props.color}}></div>
    <div className="text">{props.title}</div>
  </div>
;

export default Comment;
