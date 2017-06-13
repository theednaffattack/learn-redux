import { TEST_ACTION } from '../actions/types';

const INITIAL_STATE = { message: '' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case TEST_ACTION:
      console.log('returning TEST_ACTION from reducer ' + JSON.stringify(action.payload, null, 2));
      const { location, current } = action.payload;
      return { ...state, message: location };
  }
  return state;
}
