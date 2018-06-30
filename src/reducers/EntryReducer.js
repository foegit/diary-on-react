const initiallData = [
  {
    id: 1,
    countComments: 321,
    text: 'First item with custom name'
  },
  {
    id: 2,
    countComments: 3,
    text: 'Second item is active'
  }
];
export default function (state=initiallData, action){
  switch (action.type) {
    case 'ADD_ENTRY':
      action.payload.id = Date.now();
      action.payload.countComments = 0;
      return [...state, action.payload];
    case 'DELETE_ENTRY':
      return state.filter(entry =>
      entry.id !== action.payload.id );
    case 'INC_COMMENT_COUNT':
      return state.map(entry=>{
        if(entry.id === action.payload.id)
          entry.countComments++;
        return entry;
      });
    default:
      return state;
    }
}
