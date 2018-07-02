import { SELECT_ENTRY, RESET_SELECT } from '../actions/actionTypes';

export default function CurrentEntryReducer(state = null, action){
  switch (action.type) {
    case SELECT_ENTRY:
      return action.payload.id;
    case RESET_SELECT:
      return null;
    default:
      return state
  }
}
