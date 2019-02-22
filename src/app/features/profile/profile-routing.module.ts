import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ViewProfileComponent, EditProfileComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ViewProfileComponent,
  },
  {
    path: 'edit',
    component: EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {

}