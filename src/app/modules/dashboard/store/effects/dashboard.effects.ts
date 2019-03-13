import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap } from 'rxjs/operators';

import * as DashboardActions from '../actions/dashboard.actions';
import { Injectable } from '@angular/core';
import { GamesService } from "src/app/modules/games/services/games.service";
import { ProfileService } from 'src/app/modules/profile/services/profile.service';
import { mapToDashboardState } from '../functions';

@Injectable()
export class DashboardEffects {
  @Effect()
  getDashboard = this.actions$.pipe(
    ofType(DashboardActions.DashboardActionTypes.FetchDashboard),
    switchMap(() => {
      return this.gamesService.getGames().pipe(
        mergeMap(games => {
          return this.profileService.getUser().pipe(
            map(user => {
              const dashboard = mapToDashboardState(games, user);
              return new DashboardActions.SetDashboard(dashboard);
            })
          )
        })
      )
    })
  );

  constructor(
    private actions$: Actions,
    private gamesService: GamesService,
    private profileService: ProfileService
  ) {}
}