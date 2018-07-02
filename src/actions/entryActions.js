import { ADD_ENTRY, DELETE_ENTRY, INC_COMMENT_COUNT } from './actionTypes';

export const addEntry = text => {
  return{ type: ADD_ENTRY,
          payload: {text} };
}
export const deleteEntry = id => {
  return {  type: DELETE_ENTRY,
            payload: {id} };
}
export const incCountComment = id => {
  return {  type: INC_COMMENT_COUNT,
            payload: {id} };
}
