import { createReducer } from '@reduxjs/toolkit';

import {
  INIT_COUNTRIES,
  INIT_NUMBER_OF_COUNTRIES,
  INIT_GLOBAL_DATA,
  TOGGLE_MODAL,
  SET_SLIDE_INDEX,
  SHOW_FILTER_PANEL,
  NEXT,
  SET_OFFSET,
  PREV,
  INIT_DATE,
  INIT_FLAGS,
} from '../actions';

const initialState = {
  today: new Date(),
  date: '',
  countries: [],
  flags: [],
  numberOfCountries: null,
  globalData: {},
  slideIndex: 0,
  dataExpiration: '',
  isDataExpired: false,
  offset: 0,
  showFilterPanel: false,
  showModal: false,
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
  [INIT_DATE]: (state, action) => ({
    ...state,
    date: action.payload,
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
  [SHOW_FILTER_PANEL]: (state, action) => ({
    ...state,
    showFilterPanel: action.payload,
  }),
});
