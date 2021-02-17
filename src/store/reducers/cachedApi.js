import { createReducer } from '@reduxjs/toolkit';

import { SET_CACHED_DATA_SUCCESS } from '../actions';

const initialState = {
  cachedCountries: [],
  cachedNumberOfCountries: [],
  cachedFlags: [],
  apiExpiration: '',
};

export const cachedApi = createReducer(initialState, {
  [SET_CACHED_DATA_SUCCESS]: (state, action) => ({
    ...state,
    cachedFlags: action.cachedFlags,
    cachedCountries: action.countries,
    cachedNumberOfCountries: action.numberOfCountries,
    apiExpiration: action.expiration,
  }),
});
