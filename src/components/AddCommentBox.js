import React from 'react';

function AddCommentBox (props){
  function getComment()
  {
      let input = document.getElementById('commentInput');
      let value = input.value;
      if(value !== '' && typeof props.toentry === 'number')
      {
        input.value = '';
        return props.onAdd ({
            title: value,
            entryId: props.toentry,
            author: '#789'
        })
      }

  }
  return (<div className="addComment">
    <div className='icon'style={{backgroundColor: 'gray'}} ></div>
    <div className="newComment">
      <textarea id="commentInput"></textarea>
      <button className='app-btn send-btn' onClick={()=>getComment()}>Send</button>
    </div>
  </div>);
}

export default AddCommentBox;
