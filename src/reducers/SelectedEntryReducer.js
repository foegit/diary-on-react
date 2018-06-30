export default function CurrentEntryReducer(state = null, action){
  switch (action.type) {
    case ("SELECT_ENTRY"):
      return action.payload.id;
    case ("RESET_SELECT"):
      return null;
    default:
      return state
  }
}
