import { createStore } from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import rootReducer from './redusers/rootReducer' 

const store = createStore(rootReducer, composeWithDevTools())

export default store;
