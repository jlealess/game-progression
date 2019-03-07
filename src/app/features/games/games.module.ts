import { NgModule } from "@angular/core";
import { ViewGamesComponent } from './components';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [ViewGamesComponent, GameComponent],
  imports: [GamesRoutingModule, CommonModule],
  providers: []
})
export class GamesModule {
}