import { combineReducers } from 'redux';
import players from './players';
import comments from './comments';
import mflplayers from './mflplayers';

const rootReducer =  combineReducers({
  players,
  comments,
  mflplayers
});

export default rootReducer;
