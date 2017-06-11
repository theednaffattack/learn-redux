// a reducer takes two things:
// 
// 1. the action (info about what happened)
// 2. copy of the current state

function comments(state = [], action) {
  // do stuff
  console.log(state, action)
  return state;
}

export default comments;
