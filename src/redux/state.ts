import {combineReducers, createStore} from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

let rootReducer = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

let store: any = createStore(rootReducer);

export default store

/*****************
 * Временный блок!*
 ******************/
// @ts-ignore
window.store = store
