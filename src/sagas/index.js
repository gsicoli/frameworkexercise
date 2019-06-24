import { all } from 'redux-saga/effects';
import categoriesWatcherSaga from './categories';
import brandsWatcherSaga from './brands';
import vehiclesWatcherSaga from './vehicles';

export default function* rootSaga() {
  yield all([
    categoriesWatcherSaga(),
    brandsWatcherSaga(),
    vehiclesWatcherSaga(),
  ]);
}
