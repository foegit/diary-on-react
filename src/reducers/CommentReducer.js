import { ADD_COMMENT, DELETE_ENTRY_COMMENTS } from '../actions/actionTypes';

const initiallData = [
  {
    id: 1,
    entryId: 1,
    author: 'yellow',
    title: `1#1 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
     ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
     pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 2,
    entryId: 1,
    author: 'red',
    title: `1#2 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
     ut aliquip ex ea commodo con.`
  },
  {
    id: 3,
    entryId: 2,
    author: 'green',
    title: `2#2Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eius.`
  },
  {
    id: 4,
    entryId: 2,
    author: 'indigo',
    title: `2#3 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
     ut aliquip ex ea commodo con. niam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo con.2#3 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
       ut aliquip ex ea commodo con. niam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo con.`
  },
  {
    id: 5,
    entryId: 2,
    author: 'pink',
    title: `2#3 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad .`
  },

];

export default function (state = initiallData, action){
  switch (action.type) {
    case ADD_COMMENT:
      action.payload.id = Date.now();
      return [...state, action.payload];
    case DELETE_ENTRY_COMMENTS:
      return state.filter(comment=>comment.entryId !== action.payload);
    default:
      return state;
  }
}
