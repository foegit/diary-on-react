const initiallData = [
  {
    id: 1,
    countComments: 321,
    name: 'First item with cusstom name'
  },
  {
    id: 2,
    countComments: 3,
    name: 'Second item is active'
  }
];
export default function (state=initiallData, action){
  if(action.type === 'ADD_ENTRY'){
    action.payload.id = Date.now();
    action.payload.countComments = 0;
    return [...state, action.payload];
  }
  else if(action.type === 'DELETE_ENTRY'){
    return state.filter(entry => entry.id !== action.payload )
  }
  return state;
}
