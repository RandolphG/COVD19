import { createReducer } from '@reduxjs/toolkit';

import {
  INIT_COUNTRIES,
  INIT_NUMBER_OF_COUNTRIES,
  INIT_GLOBAL_DATA,
  TOGGLE_MODAL,
  SET_SLIDE_INDEX,
  NEXT,
  SET_OFFSET,
  PREV,
  INIT_FLAGS,
  SET_MODE_INDEX,
} from '../actions';

const initialState = {
  today: new Date(),
  countries: [],
  flags: [],
  numberOfCountries: null,
  globalData: {},
  slideIndex: 0,
  Expiration: '',
  isDataExpired: false,
  offset: 0,
  showModal: false,
  displayMode: 'CAROUSEL',
};

export const api = createReducer(initialState, {
  [INIT_COUNTRIES]: (state, action) => ({
    ...state,
    countries: action.payload,
  }),
  [INIT_NUMBER_OF_COUNTRIES]: (state, action) => ({
    ...state,
    numberOfCountries: action.payload,
  }),
  [INIT_GLOBAL_DATA]: (state, action) => ({
    ...state,
    globalData: action.payload,
  }),
  [INIT_FLAGS]: (state, action) => ({
    ...state,
    flags: action.payload,
  }),
  [NEXT]: (state, action) => ({
    ...state,
    slideIndex: action.payload,
  }),
  [SET_OFFSET]: (state, action) => ({
    ...state,
    offset: action.payload,
  }),
  [PREV]: (state, action) => ({
    ...state,
    slideIndex: action.payload,
  }),
  [TOGGLE_MODAL]: (state, action) => ({
    ...state,
    showModal: action.payload,
  }),
  [SET_SLIDE_INDEX]: (state, action) => ({
    ...state,
    slideIndex: action.payload,
  }),
  [SET_MODE_INDEX]: (state, action) => ({
    ...state,
    modeIndex: action.payload,
  }),
});
