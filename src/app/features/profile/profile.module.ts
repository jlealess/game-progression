import { NgModule } from "@angular/core";
import { ViewProfileComponent, EditProfileComponent } from './components';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ViewProfileComponent, EditProfileComponent],
  imports: [ProfileRoutingModule, CommonModule],
  providers: []
})
export class ProfileModule {

}