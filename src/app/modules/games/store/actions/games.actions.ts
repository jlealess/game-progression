import { Action } from '@ngrx/store';
import { Game } from '../../../../models/game.models';
import { Platform } from '../../../../models/platform.models';

export enum GamesActionTypes {
  SetGames = 'SET_GAMES',
  SetPlatforms = 'SET_PLATFORMS',
  FetchGames = 'FETCH_GAMES',
  FetchPlatforms = 'FETCH_PLATFORMS'
}

export class FetchGames implements Action {
  readonly type = GamesActionTypes.FetchGames;
}

export class FetchPlatforms implements Action {
  readonly type = GamesActionTypes.FetchPlatforms;
}

export class SetGames implements Action {
  readonly type = GamesActionTypes.SetGames;
  constructor(public payload: Game[]) { }
}

export class SetPlatforms implements Action {
  readonly type = GamesActionTypes.SetPlatforms;
  constructor(public payload: Platform[]) { }
}

export type GamesActions = FetchGames | SetGames | FetchPlatforms | SetPlatforms;