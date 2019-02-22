import { NgModule } from "@angular/core";
import { GamesComponent } from './components';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing-module';

@NgModule({
  declarations: [GamesComponent],
  imports: [GamesRoutingModule, CommonModule],
  providers: []
})
export class GamesModule {

}