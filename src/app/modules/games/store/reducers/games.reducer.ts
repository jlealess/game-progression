import { GamesActionTypes, GamesActions } from '../actions/games.actions';
import { Game, GameInput } from '../../../../models/game.models';
import { Platform } from 'src/app/models/platform.models';

export interface GamesState {
  games: Game[],
  editedGame: GameInput,
  platforms: Platform[]
}

export const initialState: GamesState = {
  games: [],
  editedGame: null,
  platforms: []
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
    case GamesActionTypes.SetPlatforms: {
      return {
        ...state,
        platforms: action.payload
      }
    }
    default:
      return state;
  }
}