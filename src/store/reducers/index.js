import { combineReducers } from 'redux';
import { api } from './api';
import { connectRouter } from 'connected-react-router';
import { cachedApi } from './cachedApi';

const rootReducer = history =>
  combineReducers({ cachedApi: cachedApi, api: api, router: connectRouter(history) });

export default rootReducer;
