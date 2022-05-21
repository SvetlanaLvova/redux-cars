// маршрутизатор (ничего не делает)

import { combineReducers } from 'redux';
import carReducer from './carReducer';

const rootReducer = combineReducers({ 
  cars: carReducer 
});
// cars - срез в state => {cars:[]}

export default rootReducer;
