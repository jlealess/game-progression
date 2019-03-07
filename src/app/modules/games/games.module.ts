import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { gamesReducer } from './store/reducers/games.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GamesEffects } from '../games/store/effects/games.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('games', gamesReducer),
    EffectsModule.forFeature([GamesEffects])
  ]
})
export class GamesModule { }
