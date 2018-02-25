import { combineReducers } from 'redux';

import ajaxCallsInProgress from './ajaxStatusReducer';
import  Songs  from "./SongReducer";

const rootReducer = combineReducers({

  Songs,
  ajaxCallsInProgress
});

export default rootReducer;
