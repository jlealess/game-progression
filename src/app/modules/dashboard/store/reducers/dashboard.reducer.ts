import { DashboardActionTypes, DashboardActions } from "../actions/dashboard.actions";
import { Game } from "../../../../models/game.models";

export interface DashboardState {
  timeRemaining: number;
  finishedGames: number;
  unfinishedGames: number;  
}

export const initialState: DashboardState = {
  timeRemaining: 0,
  finishedGames: 0,
  unfinishedGames: 0  
};

export function dashboardReducer(state = initialState, action: DashboardActions) {
  switch (action.type) {
    case DashboardActionTypes.SetDashboard: {
      return {
        ...state,
        timeRemaining: action.payload.timeRemaining,
        finishedGames: action.payload.finishedGames,
        unfinishedGames: action.payload.unfinishedGames
      };
    }
    default:
      return state;
  }
}
