import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import ManageBookReducer from './managebook/reducer';
import AuthReducer from './auth/reducer';
// Import more reducers from here

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  manageBookStore: ManageBookReducer,
  authStore: AuthReducer,
  // combine more reducers here
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);