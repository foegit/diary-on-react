import { SELECT_ENTRY, RESET_SELECT } from './actionTypes';

export const selectEntry = id => {
  return{ type: SELECT_ENTRY,
          payload: {id} };
}
export const resetSelect = () => {
  return {  type: RESET_SELECT };
}
