import { combineReducers } from 'redux';

import findIP from './findIP';

const rootReducer = combineReducers({
  findIP,
});

export default rootReducer;
