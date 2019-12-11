import { all, fork } from 'redux-saga/effects';
import { fetchDataWatcher } from './employees';

function* rootSaga() {
    yield all([
        fork(fetchDataWatcher),
    ]);
}


export default rootSaga;