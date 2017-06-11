// a reducer takes two things:
// 
// 1. the action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
  // do stuff
  switch(action.type) {
    case 'INCREMENT_LIKES':
    console.log('Incrementing Likes!!!');
    const i = action.index;
    return [
      ...state.slice(0,i), // before the one we're updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1), // everything after the one we're updating
    ];
    // return updated state
    default:
      return state;
  }
}

export default posts;
