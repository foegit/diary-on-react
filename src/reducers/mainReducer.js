import { combineReducers } from 'redux';
import EntryReducer from './EntryReducer';
import CommentReducer from './CommentReducer';
import CurrentEntryReducer from './CurrentEntryReducer';


const mainReducer = combineReducers({
  entry: EntryReducer,
  comments: CommentReducer,
  current_entry: CurrentEntryReducer
});

export default mainReducer;
