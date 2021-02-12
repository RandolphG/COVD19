import { createReducer } from '@reduxjs/toolkit';

import {
  NEXT,
  PREV,
  SHOW_FILTER_PANEL,
  SET_SLIDE_INDEX,
  SET_OFFSET,
  TOGGLE_MODAL,
} from '../actions';

const initialState = {
  slideIndex: 0,
  offset: 0,
  showFilterPanel: false,
  showModal: true,
};

export const appData = createReducer(initialState, {
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
  [SHOW_FILTER_PANEL]: (state, action) => ({
    ...state,
    showFilterPanel: action.payload,
  }),
  [SET_SLIDE_INDEX]: (state, action) => ({
    ...state,
    slideIndex: action.payload,
  }),
  [TOGGLE_MODAL]: (state, action) => ({
    ...state,
    showModal: action.payload,
  }),
});
