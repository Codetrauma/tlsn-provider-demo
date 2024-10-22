import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({});

export type AppRootState = ReturnType<typeof rootReducer>;

const createStoreWithMiddleware =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(
        thunk,
        createLogger({
          collapsed: true,
        }),
      )(createStore)
    : applyMiddleware(thunk)(createStore);

function configureAppStore(preloadedState?: AppRootState) {
  return createStoreWithMiddleware(rootReducer);
}

export default configureAppStore;