import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './store/reducers/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from '../profile/store/effects/profile.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([ProfileEffects])
  ]
})
export class ProfileModule { }
