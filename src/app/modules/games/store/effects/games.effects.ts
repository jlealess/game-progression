import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as GamesActions from '../actions/games.actions';
import { GamesService } from '../../services/games.service';
import { ProfileService } from 'src/app/modules/profile/services/profile.service';
import { mapPlatformsToGames, mapUserToGames, calculateDate } from '../../functions';
import { GameInput } from 'src/app/models/game.models';
import { Platform } from 'src/app/models/platform.models';

@Injectable()
export class GamesEffects {
  games$: Observable<GameInput[]>;
  platforms$: Observable<Platform[]>;
  
  @Effect()
  getPlatforms = this.actions$.pipe(
    ofType(GamesActions.GamesActionTypes.FetchPlatforms),
    switchMap((action: GamesActions.FetchPlatforms) => {
      return this.gamesService.getPlatforms().pipe(
        map((platforms) => {
          console.log(platforms);
          return new GamesActions.SetPlatforms(platforms);
        })
      );
    }),
  )

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

  @Effect()
  deleteGame = this.actions$.pipe(
    ofType(GamesActions.GamesActionTypes.DeleteGame),
    map((action: GamesActions.DeleteGame) => action.payload),
    switchMap(gameId => {
      return this.gamesService
        .deleteGame(gameId)
        .pipe(map(() => new GamesActions.FetchGames()));
    })
  );

  @Effect()
  addGame = this.actions$.pipe(
    ofType(GamesActions.GamesActionTypes.AddGame),
    map((action: GamesActions.AddGame) => {
      return {
        ...action.payload,
        dateCreated: calculateDate()
      }
    }),
    switchMap(game => {
      return this.gamesService
        .addGame(game)
        .pipe(map(() => new GamesActions.FetchGames()))
    })
  );

  constructor(
    private actions$: Actions,
    private gamesService: GamesService,
    private profileService: ProfileService,
  ) {}
}