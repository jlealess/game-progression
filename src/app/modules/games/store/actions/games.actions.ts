import { Action } from '@ngrx/store';

export enum GamesActionTypes {
  SetGames = 'SET_GAMES',
  FetchGames = 'FETCH_GAMES'
}

export class FetchGames implements Action {
  readonly type = GamesActionTypes.FetchGames;
}

export class SetGames implements Action {
  readonly type = GamesActionTypes.SetGames;
  constructor(public payload: Games) { }
}

// get user profile from API --> dispatch from view

// handle error

// success dispatches on effect --> do data transformaiton on effect rather than on component

export type ProfileActions = FetchGames | SetGames;