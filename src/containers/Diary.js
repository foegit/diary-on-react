import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddEntryBox from '../components/AddEntryBOX';
import Entry from '../components/Entry'
import { delete_entry, add_entry } from '../actions/entryActions';
import { add_comment, delete_entry_comments } from '../actions/commentActions';
import { select_entry, reset_select } from '../actions/selectEntryActions';

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
                name={entry.text}
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
    deleteEntry: (id) => {
      dispatch( delete_entry(id) );
      dispatch( delete_entry_comments(id) );
      dispatch( reset_select() );
    },
    addEntry: (entry) => dispatch( add_entry(entry)),
    activateEntry: (id) => dispatch( select_entry(id) )
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Diary);
