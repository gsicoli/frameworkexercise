import { takeEvery, call, put } from 'redux-saga/effects';
import { saveVehicle } from '../api';
import {
  VEHICLE_SAVED,
  SAVE_VEHICLE,
  API_ERROR,
} from '../constants/action-types';

function* saveVehicleSaga(action) {
  const { vehicle } = action.payload;

  try {
    yield call(saveVehicle, vehicle);
    yield put({ type: VEHICLE_SAVED });
  } catch (err) {
    yield put({ type: API_ERROR, payload: err });
  }
}

export default function* saveVehicleWatcherSaga() {
  yield takeEvery(SAVE_VEHICLE, saveVehicleSaga);
}
