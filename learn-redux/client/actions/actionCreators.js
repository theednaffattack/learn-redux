// usually you'd create one action creator per file

// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

// get location
export const getLocation = () => {
  const geolocation = navigator.geolocation;
  
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }
    
    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });
  
  return {
    type: 'GET_LOCATION',
    payload: location
  }
};

import axios from 'axios';
import { TEST_ACTION } from './types.js';
const API_URL = 'https://api.apixu.com/v1/current.json?key=cb31002097014d48b5d15513170906&q=';

export function testAction() {
  return function(dispatch) {
    axios.get(`${API_URL}/San Francisco`)
    .then((response) => {
      console.log('Dispatching TEST_ACTION');
      dispatch({
        type: TEST_ACTION,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

