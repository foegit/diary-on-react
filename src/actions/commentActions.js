import { ADD_COMMENT, DELETE_ENTRY_COMMENTS } from './actionTypes';

export const addComment = comment => {
  return{ type: ADD_COMMENT,
          payload: comment};
}
export const deleteEntryComments = id => {
  return{ type: DELETE_ENTRY_COMMENTS,
          payload: id};
}
