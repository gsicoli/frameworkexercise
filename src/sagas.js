import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchMarcas(action) {
  try {
    const marcas = yield call(Api.fetchMarcas, action.payload.tipo);
    yield put({ type: 'MARCAS_FETCH_SUCCEEDED', marcas });
  } catch (err) {
    yield put({ type: 'MARCAS_FETCH_FAILED', message: err.message });
  }
}

function* gsSaga() {
  yield takeLatest('TYPE_CHANGED', fetchMarcas);
}

export default gsSaga;
