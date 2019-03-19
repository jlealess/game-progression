import { NgModule } from "@angular/core";
import { ViewGamesComponent } from './components';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GameComponent } from './components/game/game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { UiModule } from 'src/app/modules/ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewGamesComponent, GameComponent, EditGameComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    GamesRoutingModule,
    CommonModule,
    UiModule
  ],
  providers: []
})
export class GamesModule {}