import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const makeStore = (initialState) => {
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable no-undef */
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  store.runSaga = () => {
    if (store.saga) return;
    store.saga = sagaMiddleware.run(sagas);
  };

  store.stopSaga = async () => {
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    store.runSaga();
    tasks(store.dispatch);
    await store.stopSaga();
    if (!isServer) {
      store.runSaga();
    }
  };

  store.runSaga();

  return store;
};

export default makeStore;
