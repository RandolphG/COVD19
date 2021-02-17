import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import { root } from './rootEpic';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const logger = createLogger({
  collapsed: true,
  level: 'info',
  predicate: () => process.env.NODE_ENV === 'development',
});

const middleware = applyMiddleware(epicMiddleware, routerMiddleware(history), thunk, logger);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer(history), composeEnhancer(middleware));

epicMiddleware.run(root);

export default store;
