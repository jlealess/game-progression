import { Action } from '@ngrx/store';
import { Game, GameInput } from '../../../../models/game.models';

export enum GamesActionTypes {
  SetGames = 'SET_GAMES',
  SetGame = 'SET_GAME',
  FetchGames = 'FETCH_GAMES',
  FetchGame = 'FETCH_GAME',
  UpdateGame = 'UPDATE_GAME'
}

export class FetchGames implements Action {
  readonly type = GamesActionTypes.FetchGames;
}

export class FetchGame implements Action {
  readonly type = GamesActionTypes.FetchGame;
  constructor(public payload: number) {}
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

export type GamesActions =
  | FetchGames
  | FetchGame
  | SetGames
  | SetGame
  | UpdateGame;