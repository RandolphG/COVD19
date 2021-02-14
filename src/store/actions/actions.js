import {
  NEXT,
  PREV,
  SHOW_FILTER_PANEL,
  SET_SLIDE_INDEX,
  SET_OFFSET,
  TOGGLE_MODAL,
  INIT_COUNTRIES,
  INIT_NUMBER_OF_COUNTRIES,
  INIT_GLOBAL_DATA,
  INIT_DATE,
  INIT_FLAGS,
  SET_MODE_INDEX,
  SET_SELECTED_MACHINE_ROLE,
  SET_CURRENT_MODE,
} from './actionTypes';

export const showFilterPanel = payload => ({ type: SHOW_FILTER_PANEL, payload });

export const goNEXT = payload => ({ type: NEXT, payload });

export const goPREV = payload => ({ type: PREV, payload });

export const setSlideIndex = payload => ({ type: SET_SLIDE_INDEX, payload });

export const setOffset = payload => ({ type: SET_OFFSET, payload });

export const toggleModal = payload => ({ type: TOGGLE_MODAL, payload });

export const initCountries = payload => ({ type: INIT_COUNTRIES, payload });

export const initNumberOfCountries = payload => ({ type: INIT_NUMBER_OF_COUNTRIES, payload });

export const initGlobalData = payload => ({ type: INIT_GLOBAL_DATA, payload });

export const initFlags = payload => ({ type: INIT_FLAGS, payload });

export const setSelectedMachineRole = payload => ({
  type: SET_SELECTED_MACHINE_ROLE,
  payload,
});

export const setMode = payload => ({
  type: SET_MODE_INDEX,
  payload,
});

export const setCurrentMode = payload => ({
  type: SET_CURRENT_MODE,
  payload,
});
