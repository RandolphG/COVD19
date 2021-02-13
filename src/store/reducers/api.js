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
  SET_CURRENT_MODE,
  SET_MODE_INDEX,
  SET_SELECTED_MACHINE_ROLE,
} from '../actions';
import Table from '../../components/Covid19/DisplayMode/Table';
import Carousel from '../../components/Covid19/DisplayMode/Carousel';
import List from '../../components/Covid19/DisplayMode/List';

export const MODAL_VIEWS = {
  CAROUSEL: {
    name: 'CAROUSEL',
  },
  TABLE: {
    name: 'TABLE',
  },
  LIST: {
    name: 'LIST',
  },
};

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
  showModal: true,
  displayMode: 'CAROUSEL',
  modeIndex: null,
  views: Object.values(MODAL_VIEWS).map(({ name }, index) => ({
    name,
    value: index,
  })),
  current: MODAL_VIEWS.CAROUSEL.name,
  default: MODAL_VIEWS.CAROUSEL.name,
  roles: [
    {
      link: <span style={{ background: 'yellow', height: '16px', width: '16px' }}>></span>,
      mode: 'CARD',
      render: function carousel() {
        return <Carousel />;
      },
    },
    {
      link: <span style={{ background: 'yellow', height: '16px', width: '16px' }}>></span>,
      mode: 'LIST',
      render: function list() {
        return <List />;
      },
    },

    {
      link: <span style={{ background: 'yellow', height: '16px', width: '16px' }}>></span>,
      mode: 'TABLE',
      render: function table() {
        return <Table />;
      },
    },
  ],
};

const isStepValid = payload => Object.keys(MODAL_VIEWS).includes(payload);

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
  [SET_SELECTED_MACHINE_ROLE]: (state, action) => ({
    ...state,
    mode: action.payload,
  }),
  [SET_MODE_INDEX]: (state, action) => ({
    ...state,
    modeIndex: action.payload,
  }),
  [SET_CURRENT_MODE]: (state, action) => ({
    ...state,
    current: action.payload && isStepValid(action.payload) ? action.payload : state.default,
  }),
});
