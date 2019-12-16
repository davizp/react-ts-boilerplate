/**
 *  FILE: REDUX ROOT REDUCER
 **/

import { combineReducers } from 'redux';

// All Reducers - '../../containers/*/reducers'
import employeesReducer from '../../containers/Employees/reducers';

const rootReducer = combineReducers({
  employeesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
