import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddEntryBox from '../components/AddEntryBox';
import Entry from '../components/Entry'
import { deleteEntry, addEntry } from '../actions/entryActions';
import { addComment, deleteEntryComments } from '../actions/commentActions';
import { selectEntry, resetSelect } from '../actions/selectEntryActions';

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
      dispatch( deleteEntry(id) );
      dispatch( deleteEntryComments(id) );
      dispatch( resetSelect() );
    },
    addEntry: (entry) => dispatch( addEntry(entry)),
    activateEntry: (id) => dispatch( selectEntry(id) )
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Diary);
