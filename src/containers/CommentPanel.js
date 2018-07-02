import React, {Component} from 'react';
import { connect } from 'react-redux';

import CommentList from '../components/CommentList';
import Comment from '../components/Comment';
import AddCommentBox from '../components/AddCommentBox';
import { addComment } from '../actions/commentActions';
import { incCountComment } from '../actions/entryActions';

class CommentPanel extends Component {
  render(){
  const {comments, activeEntry, addComment} = this.props;
  if (activeEntry !== null)
  {
    return(
    <div className="commentBlock panel">
      <h1>Comments</h1>
        <CommentList comments={comments.filter(comment => comment.entryId === activeEntry)}/>
        <AddCommentBox onAdd={addComment} toentry={activeEntry}/>
    </div>
  );}
  else {
    return null;
  }
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
    addComment: (comment) => {
      dispatch(addComment(comment));
      dispatch(incCountComment(comment.entryId))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentPanel);
