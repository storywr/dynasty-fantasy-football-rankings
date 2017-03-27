import { combineReducers } from 'redux';
import players from './players';
import comments from './comments';
import mflplayers from './mflplayers';
import adp from './adp';

const rootReducer =  combineReducers({
  players,
  comments,
  mflplayers,
  adp
});

export default rootReducer;
