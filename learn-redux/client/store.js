import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import default data for dev purposes
import posts from './data/posts.js';
import comments from './data/comments.js';

// create an object for the default data
const defaultState = {
  posts,
  comments,
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
