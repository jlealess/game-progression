import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ViewGamesComponent, EditGameComponent } from './components/';
import { AddGameComponent } from './components/add-game/add-game.component';

const routes: Routes = [
  {
    path: "",
    component: ViewGamesComponent
  },
  {
    path: "edit/:id",
    component: EditGameComponent
  },
  {
    path: "add",
    component: AddGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {

}