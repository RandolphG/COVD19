import { createReducer } from '@reduxjs/toolkit';

import { SET_CACHED_DATA_SUCCESS } from '../actions';

const initialState = {
  cachedCountries: [],
  cachedNumberOfCountries: [],
  cachedFlags: [],
  apiExpiration: '',
};

export const cachedApi = createReducer(initialState, {
  [SET_CACHED_DATA_SUCCESS]: (state, { numberOfCountries, countries, flags, expiration }) => {
    return {
      ...state,
      cachedCountries: countries,
      cachedFlags: flags,
      apiExpiration: expiration,
      cachedNumberOfCountries: numberOfCountries,
    };
  },
});
