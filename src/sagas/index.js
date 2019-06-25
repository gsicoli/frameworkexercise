import { all } from 'redux-saga/effects';
import categoriesWatcherSaga from './categories';
import brandsWatcherSaga from './brands';
import modelsWatcherSaga from './models';
import yearsWatcherSaga from './years';
import vehicleWatcherSaga from './vehicle';
import saveVehicleWatcherSaga from './saveVehicle';

export default function* rootSaga() {
  yield all([
    categoriesWatcherSaga(),
    brandsWatcherSaga(),
    modelsWatcherSaga(),
    yearsWatcherSaga(),
    vehicleWatcherSaga(),
    saveVehicleWatcherSaga(),
  ]);
}
