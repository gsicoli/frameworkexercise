import { all } from 'redux-saga/effects';
import categoriesWatcherSaga from './categories';
import brandsWatcherSaga from './brands';

export default function* rootSaga() {
  yield all([
    categoriesWatcherSaga(),
    brandsWatcherSaga(),
  ]);
}
