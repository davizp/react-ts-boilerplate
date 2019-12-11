import { takeEvery, call, put } from 'redux-saga/effects';
import Types from '../actions/types';
import {
  successEmployees,
} from '../actions';

// Workers
export function *fetchData() {

    const dataRawPromise = yield call(fetch, "http://dummy.restapiexample.com/api/v1/employees");

    const employees = yield dataRawPromise.json();

    yield put(successEmployees(employees));
}

// Watchers
export function *fetchDataWatcher() {
    yield takeEvery(Types.FETCH_EMPLOYEES, fetchData);
}

