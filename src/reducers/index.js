import { combineReducers } from 'redux';
import BankReducer from './reducer_bank';
import CityReducer from './reducer_city';

const rootReducer = combineReducers({
  cities:CityReducer,
  banks: BankReducer
});

export default rootReducer;
