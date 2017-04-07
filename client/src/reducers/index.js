import { combineReducers } from 'redux';
import players from './players';
import comments from './comments';
import mflplayers from './mflplayers';
import adp from './adp';
import league from './league';
import rosters from './rosters';
import profile from './profile';

const rootReducer =  combineReducers({
  players,
  comments,
  mflplayers,
  adp,
  league,
  rosters,
  profile
});

export default rootReducer;
