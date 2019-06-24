import { takeEvery, call, put } from 'redux-saga/effects';
import { VEHICLES_REQUESTED, VEHICLES_LOADED, API_ERROR } from '../constants/action-types';
import { fetchVehicles } from '../api';

function* fetchVehiclesSaga(action) {
  const { params } = action.payload;

  try {
    const payload = yield call(fetchVehicles, params);
    yield put({ type: VEHICLES_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* vehiclesWatcherSaga() {
  yield takeEvery(VEHICLES_REQUESTED, fetchVehiclesSaga);
}
