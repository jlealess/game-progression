import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/reducers/dashboard.reducer';
import { GamesService } from '../games/services/games.service';
import { ProfileService } from '../profile/services/profile.service';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/effects/dashboard.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    StoreModule.forFeature("dashboard", dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ],
  providers: [GamesService, ProfileService]

})
export class DashboardModule {}
