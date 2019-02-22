import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent, EditProfileComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
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