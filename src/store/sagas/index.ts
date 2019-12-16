import { all, fork } from 'redux-saga/effects';

// All Sagas - '../../containers/*/sagas'
import employeesSaga from '../../containers/Employees/sagas';

function* rootSaga() {
  yield all([fork(employeesSaga)]);
}

export default rootSaga;
