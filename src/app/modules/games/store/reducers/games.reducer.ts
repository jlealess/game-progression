import { GamesActionTypes, GamesActions } from '../actions/games.actions';
import { Game } from '../../../../models/game.models';

export interface GamesState {
  games: Game[]
}

export const initialState: GamesState = {
  games: []
};

export function gamesReducer(state = initialState, action: GamesActions) {
  switch (action.type) {
    case GamesActionTypes.SetGames: {
      return {
        ...state,
        games: action.payload
      }
    }
    default:
      return state;
  }
}