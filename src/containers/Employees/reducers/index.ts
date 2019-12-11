/**
*  FILE: CONTAINERS'S REDUX ROOT REDUCER
**/

import { combineReducers } from 'redux';
import employees from './employees';

const rootReducer = combineReducers({
   employees,
});

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
