/**
 * Redux store where the current state of the application is saved.
 */

import { createStore } from 'redux';

import Reducer from './reducers/reducer';

// the reducer defines the data structure and the initial values
const store = createStore(Reducer);
export default store;