import { combineReducers } from 'redux';

import entryReducer from './EntryReducer';
import commentReducer from './CommentReducer';
import selectedEntryReducer from './SelectedEntryReducer';

const mainReducer = combineReducers({
  entry: entryReducer,
  comments: commentReducer,
  current_entry: selectedEntryReducer
});

export default mainReducer;
