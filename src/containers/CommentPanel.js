import React, {Component} from 'react';

class CommentPanel extends Component {
  render(){
  return(
    <div className="commentBlock panel">
      <h1>Comments</h1>
      <div className="comments-list">
        <div className="comment">
          <div className="icon" style={{backgroundColor: 'indigo'}}></div>
          <div className="text">Lorem</div>
        </div>
        <div className="comment">
          <div className="icon" style={{backgroundColor: 'skyblue'}}></div>
          <div className="text">Lorem</div>
        </div>
        <div className="comment">
          <div className="icon" style={{backgroundColor: 'orange'}}></div>
          <div className="text">Lorem</div>
        </div>
        <div className="comment">
          <div className="icon" style={{backgroundColor: 'red'}}></div>
          <div className="text">Lorem</div>
        </div>
      </div>
      <div className="addComment">
        <div className='icon'style={{backgroundColor: 'gray'}} ></div>
        <div className="newComment">
          <textarea id="commentInput"></textarea>
          <button className='app-btn send-btn'>Send</button>
        </div>

      </div>
    </div>
  );
}
}

export default CommentPanel;
