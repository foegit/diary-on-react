const initiallData = [
  {
    id: 1,
    name: 'First item with cusstom name'
  },
  {
    id: 2,
    name: 'Second item is active'
  }
];

export default function (state=initiallData, action){
  if(action.type === 'ADD_ENTRY'){
    action.id = Date.now();
    return [...state, action];
  }
  else if(action.type === 'DELETE_ENTRY'){
    return state.filter(entry => entry.id !== action.payload )
  }
  return state;
}
