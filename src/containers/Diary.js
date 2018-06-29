import React, {Component} from 'react';
import { connect } from 'react-redux';


class Diary extends Component {
  render(){
    return (
        <div className="diaryItems panel">
          <h1>Items</h1>
          <div className="add-entry-box">
            <input type="text" placeholder="Type name here..."/>
            <button className="add-btn app-btn">Add new</button>
          </div>
          <div className="entry-list">
            <div className="entry-item current-entry">
              <div className="item-info">
                <span className='entry-name'>
                  <span className='title'>First item with custom name</span>
                  <span className="statistic">123</span>
                </span>
                <button className='delete-btn app-btn'>Delete</button>
              </div>
            </div>
            <div className="entry-item">
              <div className="item-info">
                <span className='entry-name'>
                  <span className='title'>Second item</span>
                  <span className="statistic">3</span>
                </span>
                <button className='delete-btn app-btn'>Delete</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Diary;
