import { NgModule } from "@angular/core";
import { ProfileComponent, EditProfileComponent } from './components';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfileComponent, EditProfileComponent],
  imports: [ProfileRoutingModule, CommonModule],
  providers: []
})
export class ProfileModule {

}