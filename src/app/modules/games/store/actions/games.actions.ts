import { Action } from '@ngrx/store';
import { Game, GameInput } from '../../../../models/game.models';
import { Platform } from 'src/app/models/platform.models';

export enum GamesActionTypes {
  SetGames = 'SET_GAMES',
  SetGame = 'SET_GAME',
  FetchGames = 'FETCH_GAMES',
  FetchGame = 'FETCH_GAME',
  UpdateGame = 'UPDATE_GAME',
  DeleteGame = 'DELETE_GAME',
  FetchPlatforms = 'FETCH_PLATFORMS',
  SetPlatforms = 'SET_PLATFORMS',
  AddGame = 'ADD_GAME'
}

export class FetchGames implements Action {
  readonly type = GamesActionTypes.FetchGames;
}

export class FetchGame implements Action {
  readonly type = GamesActionTypes.FetchGame;
  constructor(public payload: number) {}
}

export class FetchPlatforms implements Action {
  readonly type = GamesActionTypes.FetchPlatforms;
}

export class SetPlatforms implements Action {
  readonly type = GamesActionTypes.SetPlatforms;
  constructor(public payload: Platform[]) {}
}

export class SetGames implements Action {
  readonly type = GamesActionTypes.SetGames;
  constructor(public payload: Game[]) { }
}

export class SetGame implements Action {
  readonly type = GamesActionTypes.SetGame;
  constructor(public payload: GameInput) {}
}

export class UpdateGame implements Action {
  readonly type = GamesActionTypes.UpdateGame;
  constructor(public payload: any) {};
}

export class DeleteGame implements Action {
  readonly type = GamesActionTypes.DeleteGame;
  constructor(public payload: number) {}
}

export class AddGame implements Action {
  readonly type = GamesActionTypes.AddGame;
  constructor(public payload: any) {}
}

export type GamesActions =
  | FetchGames
  | FetchGame
  | FetchPlatforms
  | SetGames
  | SetGame
  | SetPlatforms
  | UpdateGame
  | DeleteGame
  | AddGame;