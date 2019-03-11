import { NgModule } from "@angular/core";
import { ViewGamesComponent } from './components';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GameComponent } from './components/game/game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

@NgModule({
  declarations: [ViewGamesComponent, GameComponent, EditGameComponent],
  imports: [GamesRoutingModule, CommonModule],
  providers: []
})
export class GamesModule {
}