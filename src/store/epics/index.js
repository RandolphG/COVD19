import { combineEpics } from 'redux-observable';
import {
  initializeFlagsEpic,
  initializeCountriesEpic,
  checkCachedDataEpic,
} from './initializeDataEpic';

const rootEpics = combineEpics(initializeCountriesEpic, initializeFlagsEpic, checkCachedDataEpic);

export default rootEpics;
