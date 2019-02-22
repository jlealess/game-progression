import { NgModule } from "@angular/core";
import { ViewGamesComponent } from './components';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [ViewGamesComponent],
  imports: [GamesRoutingModule, CommonModule],
  providers: []
})
export class GamesModule {
}