import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProfileState } from '../reducers/profile.reducer';

// const getProfileReducerState = createFeatureSelector<ProfileState>(
//   'profile'
// )

const getProfile = (state) => {
 return state.profile
};

export const getProfileState = createSelector(
  getProfile,
  (state: ProfileState) => state.profile
)