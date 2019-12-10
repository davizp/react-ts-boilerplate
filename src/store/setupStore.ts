import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

function setupStore(initialState: any) {

  // Middleware
  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(...[
    sagaMiddleware,
  ]);

  const isDevelopment = process.env.NODE_ENV !== 'production';

  const reduxDevTools = isDevelopment && (
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

  // Store
  const store = createStore(
    rootReducer,
    initialState,
    compose(middleware, reduxDevTools)
  );

  // Sagas
  sagaMiddleware.run(rootSaga);

  return store;
}

export type AppState = ReturnType<typeof rootReducer>;

export default setupStore;

export default {};
