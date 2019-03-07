import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as ProfileActions from '../actions/profile.actions';
import { User } from '../../services/profile.service';
import * as fromProfile from '../reducers/profile.reducer';
import { getProfileState } from '../selectors/profile.selector';

export class ProfileEffects {
  @Effect()
  profileFetch = this.actions$
    .pipe(
      ofType(ProfileActions.ProfileActionTypes.FetchUserProfile),
      switchMap((action: ProfileActions.FetchUserProfile) => {
        return this.httpClient.get<User>('http://localhost:3000/profile', {
          observe: 'body',
          responseType: 'json'
        })
      })
    )

  @Effect({ dispatch: false })
  profileUpdate = this.actions$
    .pipe(
      ofType(ProfileActions.ProfileActionTypes.UpdateUserProfile),
      withLatestFrom(this.store.select(getProfileState)),
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'http://localhost:3000/profile', state, { reportProgress: true });
        return this.httpClient.request(req);
      })
    )

  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromProfile.ProfileState>) {}
}