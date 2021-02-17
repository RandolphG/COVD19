import {
  NEXT,
  PREV,
  SET_OFFSET,
  TOGGLE_MODAL,
  INIT_COUNTRIES_SUCCESS,
  INIT_NUMBER_OF_COUNTRIES_SUCCESS,
  INITIALIZE_DATA,
  INIT_COUNTRIES_FAILURE,
  INIT_FLAGS_SUCCESS,
  INIT_FLAGS_FAILURE,
  INIT_NUMBER_OF_COUNTRIES_FAILURE,
  CHECK_CACHED_DATA,
  SET_CACHED_DATA_SUCCESS,
  SET_CACHED_DATA_FAILURE,
} from './actionTypes';

export const goNEXT = payload => ({ type: NEXT, payload });

export const goPREV = payload => ({ type: PREV, payload });

export const setOffset = payload => ({ type: SET_OFFSET, payload });

export const toggleModal = payload => ({ type: TOGGLE_MODAL, payload });

/* initialize loading */
export const initializeData = () => ({
  type: INITIALIZE_DATA,
});

/* initialize flags*/
export const initFlagsSuccess = payload => ({ type: INIT_FLAGS_SUCCESS, payload });

export const initFlagsFailure = payload => ({ type: INIT_FLAGS_FAILURE, payload });

/* initialize country data*/
export const initCountriesSuccess = payload => ({ type: INIT_COUNTRIES_SUCCESS, payload });

export const initCountriesFailure = error => ({
  type: INIT_COUNTRIES_FAILURE,
  payload: { error },
});

/* initialize number of countries */
export const initNumberOfCountriesSuccess = payload => ({
  type: INIT_NUMBER_OF_COUNTRIES_SUCCESS,
  payload,
});

export const initNumberOfCountriesFailure = payload => ({
  type: INIT_NUMBER_OF_COUNTRIES_FAILURE,
  payload,
});

/* cached data */
export const checkCachedData = () => ({
  type: CHECK_CACHED_DATA,
});

export const setCachedDataSuccess = payload => ({
  type: SET_CACHED_DATA_SUCCESS,
  payload,
});

export const setCachedDataFailure = error => ({
  type: SET_CACHED_DATA_FAILURE,
  payload: { error },
});
