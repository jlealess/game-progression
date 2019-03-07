import { Action } from '@ngrx/store';
import { Game } from '../../../../models/game.models';

export enum GamesActionTypes {
  SetGames = 'SET_GAMES',
  FetchGames = 'FETCH_GAMES'
}

export class FetchGames implements Action {
  readonly type = GamesActionTypes.FetchGames;
}

export class SetGames implements Action {
  readonly type = GamesActionTypes.SetGames;
  constructor(public payload: Game[]) { }
}

export type ProfileActions = FetchGames | SetGames;