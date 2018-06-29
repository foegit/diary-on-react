export default function (state = null, action){
  if(action.type === "SET_CURRENT_ENTRY_ID"){
    return action.payload;
  }
  return state;
}
