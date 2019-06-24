import { takeEvery, call, put } from 'redux-saga/effects';
import { BRANDS_REQUESTED, BRANDS_LOADED, API_ERROR } from '../constants/action-types';
import { fetchBrands } from '../api';

function* fetchBrandsSaga(action) {
  const { category } = action.payload;

  try {
    const payload = yield call(fetchBrands, category);
    yield put({ type: BRANDS_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* brandsWatcherSaga() {
  yield takeEvery(BRANDS_REQUESTED, fetchBrandsSaga);
}
