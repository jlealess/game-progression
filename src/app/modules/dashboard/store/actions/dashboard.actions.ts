import { Action } from "@ngrx/store";
import { Dashboard } from 'src/app/models/dashboard.models';

export enum DashboardActionTypes {
  SetDashboard = "SET_DASHBOARD",
  FetchDashboard = "FETCH_DASHBOARD"
}

export class FetchDashboard implements Action {
  readonly type = DashboardActionTypes.FetchDashboard;
}

export class SetDashboard implements Action {
  readonly type = DashboardActionTypes.SetDashboard;
  constructor (public payload: Dashboard) {}
}

export type DashboardActions = FetchDashboard | SetDashboard;
