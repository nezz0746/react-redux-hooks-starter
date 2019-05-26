import { all, put, takeLatest } from 'redux-saga/effects';
import { resetCounterSuccess, resetCounterFailure } from './actions';
import * as constant from './constants';

export function* doResetCounter() {
  try {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
    yield put(resetCounterSuccess());
  } catch (error) {
    yield put(resetCounterFailure());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(constant.RESET_COUNTER_LAUNCHED, doResetCounter)
  ]);
}
