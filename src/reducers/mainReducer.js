import { combineReducers } from 'redux';
import EntryReducer from './EntryReducer';
import CommentReducer from './CommentReducer';
import SelectedEntryReducer from './SelectedEntryReducer';


const mainReducer = combineReducers({
  entry: EntryReducer,
  comments: CommentReducer,
  current_entry: SelectedEntryReducer
});

export default mainReducer;
