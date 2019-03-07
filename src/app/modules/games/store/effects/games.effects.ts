// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { switchMap, withLatestFrom, map } from 'rxjs/operators';
// import { HttpClient, HttpRequest } from '@angular/common/http';
// import { Store } from '@ngrx/store';

// import * as ProfileActions from '../actions/profile.actions';
// import { User } from '../../services/profile.service';
// import * as fromProfile from '../reducers/profile.reducer';
// import { getProfileState } from '../selectors/profile.selector';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class ProfileEffects {
//   @Effect()
//   profileFetch = this.actions$
//     .pipe(
//       ofType(ProfileActions.ProfileActionTypes.FetchUserProfile),
//       switchMap((action: ProfileActions.FetchUserProfile) => {
//         return this.httpClient.get<User>('http://localhost:3000/profile', {
//           observe: 'body',
//           responseType: 'json'
//         })
//       }),
//       map(user => new ProfileActions.SetUserProfile(user))
//     )

//   @Effect()
//   profileUpdate = this.actions$
//     .pipe(
//       ofType(ProfileActions.ProfileActionTypes.UpdateUserProfile),
//       map((action: ProfileActions.UpdateUserProfile) => action.payload),
//       switchMap((payload) => {
//         // const req = new HttpRequest('PUT', 'http://localhost:3000/profile', payload, { reportProgress: true });
//         return this.httpClient.put<User>('http://localhost:3000/profile', { ...payload }).pipe(
//           map(() => new ProfileActions.SetUserProfile(payload))
//         );
//       }),
//     )

//   constructor(private actions$: Actions,
//     private httpClient: HttpClient) { }
// }