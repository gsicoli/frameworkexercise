import { takeEvery, call, put } from 'redux-saga/effects';
import { CATEGORIES_REQUESTED, CATEGORIES_LOADED, API_ERROR } from '../constants/action-types';
import { fetchCategories } from '../api';

function* fetchCategoriesSaga() {
  try {
    const payload = yield call(fetchCategories);
    yield put({ type: CATEGORIES_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* categoriesWatcherSaga() {
  yield takeEvery(CATEGORIES_REQUESTED, fetchCategoriesSaga);
}
