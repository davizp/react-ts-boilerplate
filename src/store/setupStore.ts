import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/';
import rootSaga from './sagas';

function setupStore(initialState = {}) {
  // Middleware
  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(...[sagaMiddleware]);

  const isDevelopment = process.env.NODE_ENV !== 'production';

  const composeEnhancers = isDevelopment
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

  const realMiddleware = isDevelopment
    ? composeEnhancers(middleware)
    : middleware;

  // Store
  const store = createStore(rootReducer, initialState, realMiddleware);

  // Sagas
  sagaMiddleware.run(rootSaga);

  return store;
}

// export type AppState = ReturnType<typeof rootReducer>;

export default setupStore;
