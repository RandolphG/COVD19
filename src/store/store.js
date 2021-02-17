import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import { rootEpic } from './root';

export const history = createBrowserHistory();

const logger = createLogger({
  collapsed: true,
  level: 'info',
  predicate: () => process.env.NODE_ENV === 'development', // eslint-disable-line no-unused-vars
});

const epicMiddleware = createEpicMiddleware();

const middleware = applyMiddleware(epicMiddleware, routerMiddleware(history), thunk, logger);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer(history), composeEnhancer(middleware));

epicMiddleware.run(rootEpic);

export default store;
