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
  getGames = this.actions$
    .pipe(
      ofType(GamesActions.GamesActionTypes.FetchGames),
      switchMap((action: GamesActions.FetchGames) => {
        return this.gamesService.getGames();
      }),
      mergeMap((games) => {
        return this.gamesService.getPlatforms().pipe(
          map(platforms => {
            return mapPlatformsToGames(platforms, games);
          }))
      }),
      mergeMap((games) => {
        return this.profileService.getUser().pipe(
          map(user => {
            return mapUserToGames(user, games);
          }) 
        )
      }),
      map(games => new GamesActions.SetGames(games))
    )

    constructor(private actions$: Actions,
    private gamesService: GamesService,
    private profileService: ProfileService) { }
}