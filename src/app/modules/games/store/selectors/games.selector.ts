import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GamesState } from '../reducers/games.reducer';

const getGames = (state) => {
  return state.games
};

export const getGamesState = createSelector(
  getGames,
  (state: GamesState) => state.games
)