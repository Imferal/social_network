import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    profile: profileReducer,
});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;