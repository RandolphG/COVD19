import { combineEpics } from 'redux-observable';
import { initializeFlagsEpic, initializeLoadingEpic } from './getCountriesEpic';

const rootEpics = combineEpics(initializeLoadingEpic, initializeFlagsEpic);

export default rootEpics;
