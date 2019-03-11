import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as GamesActions from '../actions/games.actions';
import { Injectable } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { ProfileService } from 'src/app/modules/profile/services/profile.service';

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
            console.log(platforms);
            return games.map(game => {
              const platform = platforms.find(
                platform => platform.id === game.platformId
              );
              const platformName = platform.name;
              return {...game, platformName}
            })
          }))
      }),
      mergeMap((games) => {
        return this.profileService.getUser().pipe(
          map(user => {
            return games.map(game => {
              const hoursLeft = game.numberOfHoursToComplete - game.numberOfHoursPlayed;
              const daysLeft = hoursLeft / user.averageNumberOfHoursPerDay;
              const date = new Date();
              const completionDate = new Date(date.setDate(date.getDate() + daysLeft)).toLocaleDateString();
              return {
                ...game,
                completionDate
              }
            })
          }) 
        )
      }),
      map(games => {
        const newGames = [...games];
        return newGames.map(game => {
          const percentCompleted = (game.numberOfHoursPlayed / game.numberOfHoursToComplete) * 100;
          return {
            ...game, 
            percentCompleted
          }
        })
      }),
      map(games => new GamesActions.SetGames(games))
    )

  // @Effect()
  // getPlatforms = this.actions$
  //   .pipe(
  //     ofType(GamesActions.GamesActionTypes.FetchPlatforms),
  //     switchMap((action: GamesActions.FetchPlatforms) => {
  //       return this.httpClient.get<any>('http://localhost:3000/platforms', {
  //         observe: 'body',
  //         responseType: 'json'
  //       })
  //     }),
  //     map(platforms => new GamesActions.SetPlatforms(platforms))
  //   )

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
    private httpClient: HttpClient,
    private gamesService: GamesService,
    private profileService: ProfileService) { }
}