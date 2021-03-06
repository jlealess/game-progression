import { ProfileActionTypes, ProfileActions } from '../actions/profile.actions';
import { User } from '../../services/profile.service';

export interface ProfileState {
  profile: User
}

export const initialState: ProfileState = {
  profile: {
    id: 1,
    languageId: 1,
    firstName: "",
    lastName: "",
    image: "",
    averageNumberOfHoursPerDay: 0
  }
};

export function profileReducer(state = initialState, action: ProfileActions) {
  switch (action.type) {
    case ProfileActionTypes.SetUserProfile: {
      return {
        ...state,
        profile: action.payload
      }
    }  
    default:
      return state;
  }
}