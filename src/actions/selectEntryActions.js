const SELECT_ENTRY = "SELECT_ENTRY";
const RESET_SELECT = "RESET_SELECT";

export const select_entry = id => {
  return{ type: SELECT_ENTRY,
          payload: {id} };
}
export const reset_select = () => {
  return {  type: RESET_SELECT };
}
