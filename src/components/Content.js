import React from 'react';
import Diary from '../containers/Diary';
import CommentPanel from './CommentPanel';

const Content = () =>{
  return (
    <div className="contentPage">
      <Diary/>
      <CommentPanel/>
    </div>
  );
}

export default Content;
