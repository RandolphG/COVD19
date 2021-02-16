import {
  NEXT,
  PREV,
  SET_OFFSET,
  TOGGLE_MODAL,
  INIT_COUNTRIES_SUCCESS,
  INIT_NUMBER_OF_COUNTRIES,
  INITIALIZE_LOADING,
  INIT_COUNTRIES_FAILURE,
  INIT_FLAGS_SUCCESS,
  INIT_FLAGS_FAILURE,
} from './actionTypes';

export const goNEXT = payload => ({ type: NEXT, payload });

export const goPREV = payload => ({ type: PREV, payload });

export const setOffset = payload => ({ type: SET_OFFSET, payload });

export const toggleModal = payload => ({ type: TOGGLE_MODAL, payload });

/* initialize loading */
export const initializeLoading = () => ({
  type: INITIALIZE_LOADING,
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

export const initNumberOfCountries = payload => ({ type: INIT_NUMBER_OF_COUNTRIES, payload });
