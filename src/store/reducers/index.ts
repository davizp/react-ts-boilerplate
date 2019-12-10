/**
*  FILE: REDUX ROOT REDUCER
**/

import { combineReducers } from 'redux';
// import { MyContainerComponentReducer } from '../containers/MyContainerComponent/reducer';

const rootReducer = combineReducers({
  // MyContainerComponentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
