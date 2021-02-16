import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  INITIALIZE_LOADING,
  initCountriesFailure,
  initCountriesSuccess,
  initFlagsSuccess,
  initFlagsFailure,
} from '../../actions';
import { api } from '../../services';

export const initializeLoadingEpic = action$ =>
  action$.pipe(
    ofType(INITIALIZE_LOADING),
    switchMap(() =>
      from(api.fetchCountries()).pipe(
        map(data => initCountriesSuccess(data)),
        catchError(error => of(initCountriesFailure(error)))
      )
    )
  );

export const initializeFlagsEpic = action$ =>
  action$.pipe(
    ofType(INITIALIZE_LOADING),
    switchMap(() =>
      from(api.fetchFlags()).pipe(
        map(data => initFlagsSuccess(data)),
        catchError(error => of(initFlagsFailure(error)))
      )
    )
  );

export default { initializeLoadingEpic, initializeFlagsEpic };
