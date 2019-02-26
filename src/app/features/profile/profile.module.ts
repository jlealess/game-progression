import { NgModule } from "@angular/core";
import { ViewProfileComponent, EditProfileComponent } from './components';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewProfileComponent, EditProfileComponent],
  imports: [
    ProfileRoutingModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class ProfileModule {

}