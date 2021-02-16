import {
  NEXT,
  PREV,
  SET_OFFSET,
  TOGGLE_MODAL,
  INIT_COUNTRIES,
  INIT_NUMBER_OF_COUNTRIES,
  INIT_FLAGS,
} from './actionTypes';

export const goNEXT = payload => ({ type: NEXT, payload });

export const goPREV = payload => ({ type: PREV, payload });

export const setOffset = payload => ({ type: SET_OFFSET, payload });

export const toggleModal = payload => ({ type: TOGGLE_MODAL, payload });

export const initCountries = payload => ({ type: INIT_COUNTRIES, payload });

export const initNumberOfCountries = payload => ({ type: INIT_NUMBER_OF_COUNTRIES, payload });

export const initFlags = payload => ({ type: INIT_FLAGS, payload });
