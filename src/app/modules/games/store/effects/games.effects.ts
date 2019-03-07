import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as GamesActions from '../actions/games.actions';
import { Game } from '../../../../models/game.models';
import * as fromGames from '../reducers/games.reducer';
import { getGamesState } from '../selectors/games.selector';
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