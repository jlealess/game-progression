import { NgModule } from "@angular/core";
import { ViewProfileComponent, EditProfileComponent } from './components';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/modules/ui/ui.module';

@NgModule({
  declarations: [ViewProfileComponent, EditProfileComponent],
  imports: [
    ProfileRoutingModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: []
})
export class ProfileModule {

}