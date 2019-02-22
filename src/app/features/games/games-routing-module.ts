import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './components/';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule {

}