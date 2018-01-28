/**
 * Redux store where the current state of the application is saved.
 */

import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import Reducer from './reducers/reducer';

// the reducer defines the data structure and the initial values
const store = createStore(
    Reducer,
    applyMiddleware(promiseMiddleware)
    // applyMiddleware(thunk)
);

export default store;