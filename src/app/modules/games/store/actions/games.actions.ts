import { Action } from '@ngrx/store';
import { Game } from '../../../../models/game.models';

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

export type GamesActions = FetchGames | SetGames;