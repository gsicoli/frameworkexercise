import { takeEvery, call, put } from 'redux-saga/effects';
import { VEHICLE_REQUESTED, VEHICLE_LOADED, API_ERROR } from '../constants/action-types';
import { fetchVehicle } from '../api';

function* fetchVehicleSaga(action) {
  const { params } = action.payload;

  try {
    const payload = yield call(fetchVehicle, params);
    yield put({ type: VEHICLE_LOADED, payload });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* vehicleWatcherSaga() {
  yield takeEvery(VEHICLE_REQUESTED, fetchVehicleSaga);
}
