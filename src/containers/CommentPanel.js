import React, {Component} from 'react';
import { connect } from 'react-redux';

import CommentList from '../components/CommentList';
import Comment from '../components/Comment';
import AddCommentBox from '../components/AddCommentBox';

class CommentPanel extends Component {
  render(){
  const {comments, activeEntry, addComment} = this.props;
  return(
    <div className="commentBlock panel">
      <h1>Comments</h1>
        <CommentList comments={comments.filter(comment => comment.entryId === activeEntry)}/>
        <AddCommentBox onAdd={addComment} toentry={activeEntry}/>
    </div>
  );
}
}

function mapStateToProps(state){
  return{
    comments: state.comments,
    activeEntry: state.current_entry
  }
}

function mapDispatchToProps(dispatch){
  return{
    addComment: comment => dispatch(
      {
        type: 'ADD_COMMENT',
        payload: comment
      }
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentPanel);
