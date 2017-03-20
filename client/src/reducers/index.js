import { combineReducers } from 'redux';
import players from './players';
import comments from './comments';

const rootReducer =  combineReducers({
  players,
  comments
});

export default rootReducer;
