import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ViewGamesComponent, EditGameComponent } from './components/';

const routes: Routes = [
  {
    path: "",
    component: ViewGamesComponent
  },
  {
    path: "edit/:id",
    component: EditGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {

}