import { combineReducers } from 'redux';
import players from './players';
import comments from './comments';
import mflplayers from './mflplayers';
import adp from './adp';
import league from './league';
import rosters from './rosters';
import profile from './profile';
import score from './score';

const rootReducer =  combineReducers({
  players,
  comments,
  mflplayers,
  adp,
  league,
  rosters,
  profile,
  score
});

export default rootReducer;
