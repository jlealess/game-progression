import { GamesActionTypes, GamesActions } from '../actions/games.actions';
import { Game } from '../../../../models/game.models';
import { Platform } from '../../../../models/platform.models';

export interface GamesState {
  games: Game[],
  platforms: Platform[]
}

export const initialState: GamesState = {
  games: [],
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