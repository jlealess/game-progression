import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';

import * as GamesActions from '../actions/games.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class GamesEffects {
  @Effect()
  getGames = this.actions$
    .pipe(
      ofType(GamesActions.GamesActionTypes.FetchGames),
      switchMap((action: GamesActions.FetchGames) => {
        return this.httpClient.get<any>('http://localhost:3000/games', {
          observe: 'body',
          responseType: 'json'
        })
      }),
      map(games => new GamesActions.SetGames(games))
    )
    
  @Effect()
  getPlatforms = this.actions$
    .pipe(
      ofType(GamesActions.GamesActionTypes.FetchPlatforms),
      switchMap((action: GamesActions.FetchPlatforms) => {
        return this.httpClient.get<any>('http://localhost:3000/platforms', {
          observe: 'body',
          responseType: 'json'
        })
      }),
      map(platforms => new GamesActions.SetPlatforms(platforms))
    )

  // @Effect()
  // profileUpdate = this.actions$
  //   .pipe(
  //     ofType(ProfileActions.ProfileActionTypes.UpdateUserProfile),
  //     map((action: ProfileActions.UpdateUserProfile) => action.payload),
  //     switchMap((payload) => {
  //       // const req = new HttpRequest('PUT', 'http://localhost:3000/profile', payload, { reportProgress: true });
  //       return this.httpClient.put<User>('http://localhost:3000/profile', { ...payload }).pipe(
  //         map(() => new ProfileActions.SetUserProfile(payload))
  //       );
  //     }),
  //   )

  constructor(private actions$: Actions,
    private httpClient: HttpClient) { }
}