import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'my-profile',
    loadChildren: './features/profile/profile.module#ProfileModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}