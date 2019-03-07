import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/effects/profile.effects';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './store/reducers/profile.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', profileReducer),
    // EffectsModule.forFeature([ProfileEffects])
  ]
})
export class ProfileModule { }
