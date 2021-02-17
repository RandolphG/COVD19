import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  INITIALIZE_DATA,
  CHECK_CACHED_DATA,
  initCountriesFailure,
  initCountriesSuccess,
  initFlagsSuccess,
  initFlagsFailure,
  setCachedDataSuccess,
  setCachedDataFailure,
} from '../../actions';
import { api } from '../../services';

export const checkCachedDataEpic = action$ =>
  action$.pipe(
    ofType(CHECK_CACHED_DATA),
    switchMap(() =>
      from(api.fetchLocalStorage()).pipe(
        map(({ numberOfCountries, countries, flags, expiration }) => {
          return setCachedDataSuccess(numberOfCountries, countries, flags, expiration);
        }),
        catchError(error => of(setCachedDataFailure(error)))
      )
    )
  );

export const initializeCountriesEpic = action$ =>
  action$.pipe(
    ofType(INITIALIZE_DATA),
    switchMap(() =>
      from(api.fetchCountries()).pipe(
        map(data => initCountriesSuccess(data)),
        catchError(error => of(initCountriesFailure(error)))
      )
    )
  );

export const initializeFlagsEpic = action$ =>
  action$.pipe(
    ofType(INITIALIZE_DATA),
    switchMap(() =>
      from(api.fetchFlags()).pipe(
        map(data => initFlagsSuccess(data)),
        catchError(error => of(initFlagsFailure(error)))
      )
    )
  );

export default {
  initializeCountriesEpic,
  initializeFlagsEpic,
  checkCachedDataEpic,
};
