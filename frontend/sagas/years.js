import { takeEvery, call, put } from 'redux-saga/effects';
import { YEARS_REQUESTED, YEARS_LOADED, API_ERROR } from '../constants/action-types';
import { fetchYears } from '../api';

function* fetchYearsSaga(action) {
  const { params } = action.payload;

  try {
    const payload = yield call(fetchYears, params);
    yield put({ type: YEARS_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* yearsWatcherSaga() {
  yield takeEvery(YEARS_REQUESTED, fetchYearsSaga);
}
