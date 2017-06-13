import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import location from './location';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({posts, comments, location, auth: AuthReducer, routing: routerReducer});

export default rootReducer;
