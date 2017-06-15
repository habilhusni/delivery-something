import { combineReducers } from 'redux';

import { dataReducer } from './dataReducer';

const rootReducer = combineReducers({
  datas: dataReducer,
});

export default rootReducer;
