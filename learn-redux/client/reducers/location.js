import { TEST_ACTION } from '../actions/actionCreators';

// reducers
const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
}

// learn-redux/client/reducers/location.js
const LocationReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
  case 'GET_LOCATION':
    return action.payload;
  default:
    return state
  }
}

export default location;
