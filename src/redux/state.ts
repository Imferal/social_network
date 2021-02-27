import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
});

let store : any = createStore(reducers);

export default store;

/*****************
* Временный блок!*
******************/
declare global { interface Window { store:any; state:any; } }
window.store = store;
