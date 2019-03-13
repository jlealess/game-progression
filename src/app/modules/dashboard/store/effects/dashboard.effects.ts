import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap } from 'rxjs/operators';

import * as DashboardActions from '../actions/dashboard.actions';
import { Injectable } from '@angular/core';
import { GamesService } from "src/app/modules/games/services/games.service";
import { ProfileService } from 'src/app/modules/profile/services/profile.service';

@Injectable()
export class DashboardEffects {
  // @Effect()
  // getDashboard = this.actions$.pipe(
  //   ofType(DashboardActions.DashboardActionTypes.FetchDashboard),
  //   switchMap((action: DashboardActions.FetchDashboard) => {
  //     return this.gamesService.getGames();
  //   }),
  //   mergeMap(games => {
  //     return this.profileService.getUser().pipe(
  //       switchMap(user => {
  //         return games.map(game => {
  //           const hoursPerDay = user.averageNumberOfHoursPerDay;
  //           const finishedGames = games.filter((game) => game.isComplete).length;
  //           const unfinishedGames = games.filter((game) => !game.isComplete).length;

  //           const hoursRemaining = games.filter(game => !game.isComplete)
  //             .map(game => {
  //               return game.numberOfHoursToComplete - game.numberOfHoursPlayed;
  //             })
  //             .reduce((acc, curr) => {
  //               return acc + curr;
  //             }, 0);
  //           const timeRemaining = hoursRemaining / hoursPerDay;
  //           const dashboard = {
  //             timeRemaining,
  //             finishedGames,
  //             unfinishedGames
  //           };
  //           return dashboard;
  //         });
  //       })
  //     );
  //   }),
  //   map(dashboard => new DashboardActions.SetDashboard(dashboard))
  // );

  @Effect()
  getDashboard = this.actions$.pipe(
    ofType(DashboardActions.DashboardActionTypes.FetchDashboard),
    switchMap(() => {
      return this.gamesService.getGames().pipe(
        mergeMap(games => {
          return this.profileService.getUser().pipe(
            map(user => {
              const hoursPerDay = user.averageNumberOfHoursPerDay;
              const finishedGames = games.filter((game) => game.isComplete).length;
      


              const unfinishedGames = games.filter((game) => !game.isComplete).length;

              const hoursRemaining = games.filter(game => !game.isComplete)
                .map(game => {
                  return game.numberOfHoursToComplete - game.numberOfHoursPlayed;
                })
                .reduce((acc, curr) => {
                  return acc + curr;
                }, 0);
              const timeRemaining = hoursRemaining / hoursPerDay;
              const dashboard = {
                timeRemaining,
                finishedGames,
                unfinishedGames
              };
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