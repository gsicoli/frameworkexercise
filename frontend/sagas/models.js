import { takeEvery, call, put } from 'redux-saga/effects';
import { MODELS_REQUESTED, MODELS_LOADED, API_ERROR } from '../constants/action-types';
import { fetchModels } from '../api';

function* fetchModelsSaga(action) {
  const { params } = action.payload;

  try {
    const payload = yield call(fetchModels, params);
    yield put({ type: MODELS_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* modelsWatcherSaga() {
  yield takeEvery(MODELS_REQUESTED, fetchModelsSaga);
}
