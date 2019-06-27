import { takeEvery, call, put } from 'redux-saga/effects';
import { SAVED_VEHICLES_REQUESTED, SAVED_VEHICLES_LOADED, API_ERROR } from '../constants/action-types';
import { fetchSavedVehicles } from '../api';

function* fetchSavedVehiclesSaga() {
  try {
    const payload = yield call(fetchSavedVehicles);
    yield put({ type: SAVED_VEHICLES_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* savedVehiclesWatcherSaga() {
  yield takeEvery(SAVED_VEHICLES_REQUESTED, fetchSavedVehiclesSaga);
}
