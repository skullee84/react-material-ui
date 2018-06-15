import { combineReducers } from 'redux';

import * as commonReducer from './commonReducer';

export const rootReducer = combineReducers({
  commonStore: combineReducers(commonReducer)
});