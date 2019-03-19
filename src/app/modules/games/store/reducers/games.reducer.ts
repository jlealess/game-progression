import { GamesActionTypes, GamesActions } from '../actions/games.actions';
import { Game, GameInput } from '../../../../models/game.models';

export interface GamesState {
  games: Game[],
  editedGame: GameInput
}

export const initialState: GamesState = {
  games: [],
  editedGame: null
};

export function gamesReducer(state = initialState, action: GamesActions) {
  switch (action.type) {
    case GamesActionTypes.SetGames: {
      return {
        ...state,
        games: action.payload
      }
    }
    case GamesActionTypes.SetGame: {
      return {
        ...state,
        editedGame: action.payload
      }
    }
    default:
      return state;
  }
}