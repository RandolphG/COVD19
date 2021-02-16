import { createReducer } from '@reduxjs/toolkit';

import {
  INIT_COUNTRIES,
  INIT_NUMBER_OF_COUNTRIES,
  TOGGLE_MODAL,
  NEXT,
  SET_OFFSET,
  PREV,
  INIT_FLAGS,
} from '../actions';

const initialState = {
  today: new Date(),
  countries: [],
  flags: [],
  numberOfCountries: null,
  slideIndex: 0,
  Expiration: '',
  isDataExpired: false,
  offset: 0,
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
});
