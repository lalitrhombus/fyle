import { combineReducers } from 'redux';
import BankReducer from './reducer_bank';
import CityReducer from './reducer_cities';
import SearchReducer from './reducer_search';


const rootReducer = combineReducers({
  cities:CityReducer,
  banks: BankReducer,
  search:SearchReducer
});

export default rootReducer;
