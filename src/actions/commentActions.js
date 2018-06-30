const ADD_COMMENT = "ADD_COMMENT";
const DELETE_ENTRY_COMMENTS = "DELETE_ENTRY_COMMENTS";

export const add_comment = comment => {
  return{ type: ADD_COMMENT,
          payload: comment};
}
export const delete_entry_comments = id => {
  return{ type: DELETE_ENTRY_COMMENTS,
          payload: id};
}
