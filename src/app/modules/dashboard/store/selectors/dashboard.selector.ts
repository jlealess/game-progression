import { createSelector, createFeatureSelector } from "@ngrx/store";
import { DashboardState } from "../reducers/dashboard.reducer";

const getDashboard = state => {
  return state.dashboard;
};

export const getTimeRemaining = createSelector(
  getDashboard,
  (state: DashboardState) => state.timeRemaining
);

export const getFinishedGames = createSelector(
  getDashboard,
  (state: DashboardState) => state.finishedGames
);

export const getUnfinishedGames = createSelector(
  getDashboard,
  (state: DashboardState) => state.unfinishedGames
);
