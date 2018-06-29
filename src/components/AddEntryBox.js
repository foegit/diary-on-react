import React from 'react';

const AddEntryBox = (props)=>
   <div className="add-entry-box">
    <input type="text" placeholder="Type name here..." id='entry-input'/>
    <button className="add-btn app-btn" onClick={()=>{
      let input = document.getElementById('entry-input');
      let value = input.value;
      input.value = '';
      props.onNewEntry(value)}}>Add new</button>
  </div>;
export default AddEntryBox;
