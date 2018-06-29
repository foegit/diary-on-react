import React from 'react';

const Entry = (props) =>{
  return (<div className={`entry-item ${props.active?'current-entry':''}`}>
  <div className="item-info">
    <span className='entry-name' onClick={props.onActivate}>
      <span className='title'>{props.name}</span>
      <span className="commentCount">{props.comments}</span>
    </span>
    <button className='delete-btn app-btn' onClick={props.onDelete}>Delete</button>
  </div>
</div>
)}
export default Entry;
