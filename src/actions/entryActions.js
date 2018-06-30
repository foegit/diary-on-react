const ADD_ENTRY = "ADD_ENTRY";
const DELETE_ENTRY = "DELETE_ENTRY";
const INC_COMMENT_COUNT = "INC_COMMENT_COUNT";

export const add_entry = text => {
  return{ type: ADD_ENTRY,
          payload: {text} };
}
export const delete_entry = id => {
  return {  type: DELETE_ENTRY,
            payload: {id} };
}
export const inc_count_comment = id => {
  return {  type: INC_COMMENT_COUNT,
            payload: {id} };
}
