import { combineReducers } from 'redux';
import playersReducer from './players_reducer';


const rootReducer =  combineReducers({
  players: playersReducer
});


export default rootReducer;
