import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddEntryBox from '../components/AddEntryBOX';
import Entry from '../components/Entry'
import deleteEntry from '../actions/entryActions';

class Diary extends Component {
  render(){
    const {entries, comments, activeEntry, addEntry, deleteEntry, activateEntry} = this.props;
    return (
        <div className="diaryItems panel">
          <h1>Items</h1>
          <AddEntryBox onNewEntry={addEntry}/>
          <div className="entry-list" >
            {entries.map(entry =>
              <Entry
                key={entry.id}
                name={entry.name}
                comments={entry.countComments}
                active={entry.id===activeEntry}
                onDelete={()=>deleteEntry(entry.id)}
                onActivate = {()=>activateEntry(entry.id)}
                id={entry.id}/>)
                }
          </div>
        </div>
      );
  }
}

function mapStateToProps(state){
  return{
    entries: state.entry,
    comments: state.comments,
    activeEntry: state.current_entry
  }
}

function matchDispatchToProps(dispatch){

  return{
    deleteEntry: (id) => dispatch({
    type: 'DELETE_ENTRY',
    payload: id
  }),
  addEntry: (entry) => dispatch(
    {
      type: 'ADD_ENTRY',
      payload: {name: entry}
    }
  ),
  activateEntry: (id) => dispatch(
  {
    type: 'SET_CURRENT_ENTRY_ID',
    payload: id
  })
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Diary);
