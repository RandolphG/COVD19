import { createReducer } from '@reduxjs/toolkit';

import {
  INIT_COUNTRIES_SUCCESS,
  INIT_NUMBER_OF_COUNTRIES,
  TOGGLE_MODAL,
  NEXT,
  SET_OFFSET,
  PREV,
  INIT_FLAGS,
  INITIALIZE_LOADING,
  INIT_COUNTRIES_FAILURE,
  INIT_FLAGS_FAILURE,
  INIT_FLAGS_SUCCESS,
} from '../actions';

const initialState = {
  today: new Date(),
  countries: [],
  flags: [],
  loading: false,
  error: null,
  numberOfCountries: null,
  slideIndex: 0,
  Expiration: '',
  isDataExpired: false,
  offset: 0,
  showModal: false,
};

export const api = createReducer(initialState, {
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
  [INITIALIZE_LOADING]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [INIT_NUMBER_OF_COUNTRIES]: (state, action) => ({
    ...state,
    numberOfCountries: action.payload,
  }),
  [INIT_COUNTRIES_SUCCESS]: (state, action) => ({
    ...state,
    countries: action.payload,
  }),
  [INIT_COUNTRIES_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
    countries: [],
  }),
  [INIT_FLAGS]: (state, action) => ({
    ...state,
    flags: action.payload,
  }),
  [INIT_FLAGS_SUCCESS]: (state, action) => ({
    ...state,
    flags: action.payload,
  }),
  [INIT_FLAGS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
    flags: [],
  }),
});
