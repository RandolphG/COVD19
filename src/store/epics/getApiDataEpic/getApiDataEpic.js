import { ofType } from 'redux-observable';
import { ignoreElements, map } from 'rxjs/operators';

import { INIT_COUNTRIES } from '../../actions';

const getApiDataEpic = action$ =>
  action$.pipe(
    ofType(INIT_COUNTRIES),
    map(data => {
      // TODO make functionality
      console.log(`DATA`, data);
    }),
    ignoreElements()
  );

export default getApiDataEpic();
