import { Action } from '@ngrx/store';
import { User } from '../../services/profile.service';

export enum ProfileActionTypes {
  UpdateUserProfile = 'UPDATE_USER_PROFILE',
  SetUserProfile = 'SET_USER_PROFILE',
  FetchUserProfile = 'FETCH_USER_PROFILE'
}

export class FetchUserProfile implements Action {
  readonly type = ProfileActionTypes.FetchUserProfile;
}

export class UpdateUserProfile implements Action {
  readonly type = ProfileActionTypes.UpdateUserProfile;
  constructor(public payload: any) {}
}

export class SetUserProfile implements Action {
  readonly type = ProfileActionTypes.SetUserProfile;
  constructor(public payload: User) {}
}

export type ProfileActions = UpdateUserProfile | SetUserProfile | FetchUserProfile;