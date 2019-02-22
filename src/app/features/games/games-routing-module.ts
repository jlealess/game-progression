import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ViewGamesComponent } from './components/';

const routes: Routes = [
  {
    path: '',
    component: ViewGamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {

}