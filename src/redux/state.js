import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;