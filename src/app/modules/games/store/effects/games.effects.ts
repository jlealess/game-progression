import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap } from 'rxjs/operators';

import * as GamesActions from '../actions/games.actions';
import { Injectable } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { ProfileService } from 'src/app/modules/profile/services/profile.service';
import { mapPlatformsToGames, mapUserToGames } from '../../functions';

@Injectable()
export class GamesEffects {
  @Effect()
  getGames = this.actions$.pipe(
    ofType(GamesActions.GamesActionTypes.FetchGames),
    switchMap((action: GamesActions.FetchGames) => {
      return this.gamesService.getGames();
    }),
    mergeMap(games => {
      return this.gamesService.getPlatforms().pipe(
        map(platforms => {
          return mapPlatformsToGames(platforms, games);
        })
      );
    }),
    mergeMap(games => {
      return this.profileService.getUser().pipe(
        map(user => {
          return mapUserToGames(user, games);
        })
      );
    }),
    map(games => new GamesActions.SetGames(games))
  );

  @Effect()
  getGame = this.actions$.pipe(
    ofType(GamesActions.GamesActionTypes.FetchGame),
    map((action: GamesActions.FetchGame) => action.payload),  
    switchMap(gameId => {
      return this.gamesService
        .getGame(gameId)
        .pipe(map(game => new GamesActions.SetGame(game)));
    })  
  )

  @Effect()
  updateGame = this.actions$.pipe(
    ofType(GamesActions.GamesActionTypes.UpdateGame),
    map((action: GamesActions.UpdateGame) => action.payload),
    switchMap(game => {
      return this.gamesService
        .updateGame(game)
        .pipe(map(() => new GamesActions.FetchGames()));
    })
  );

  constructor(
    private actions$: Actions,
    private gamesService: GamesService,
    private profileService: ProfileService
  ) {}
}