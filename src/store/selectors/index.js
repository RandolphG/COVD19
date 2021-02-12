import { createSelector } from 'reselect';

/* get state */
export const getApiData = state => state.api;

/* show filter panel */
export const getFilter = createSelector(getApiData, api => api.showFilterPanel);

/* show slideIndex */
export const getSlideIndex = createSelector(getApiData, api => api.slideIndex);

/* show current day number */
export const getCurrentSlideIndex = createSelector(getApiData, api => api.slideIndex + 1);

/* get offset */
export const getOffset = createSelector(getApiData, api => api.offset);

/* get modal state */
export const isModalShown = createSelector(getApiData, api => api.showModal);

/* get modal state */
export const getCountries = createSelector(getApiData, api => api.countries);

/* get number of countries */
export const getNumberOfCountries = createSelector(getApiData, api => api.numberOfCountries);

/* get flags */
export const getFlags = createSelector(getApiData, api => api.flags);

/* <------------------------ NAVIGATION ---------------------------> */
export const getSteps = state => state.machineRole.views;

export const getCurrentStep = createSelector(getApiData, api => api && api.current);

export const getDefaultStep = createSelector(getApiData, api => api && api.default);

export const getSelectedRoles = views =>
  createSelector(getCurrentStep, current => views.find(view => view.name === current));

export const getMachineMode = createSelector(getApiData, api => api.mode);

export const isModeClient = createSelector(getMachineMode, mode => mode === 'Client');

export const getModeIndex = createSelector(getApiData, api => api.modeIndex);

export const getRoles = createSelector(getApiData, api => api.roles);
