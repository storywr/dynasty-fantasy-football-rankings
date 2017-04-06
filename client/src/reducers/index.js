import { combineReducers } from 'redux';
import players from './players';
import comments from './comments';
import mflplayers from './mflplayers';
import adp from './adp';
import league from './league';

const rootReducer =  combineReducers({
  players,
  comments,
  mflplayers,
  adp,
  league
});

export default rootReducer;
