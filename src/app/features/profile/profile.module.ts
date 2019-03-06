import { NgModule } from "@angular/core";
import { ViewProfileComponent, EditProfileComponent } from './components';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/effects/profile.effects';

@NgModule({
  declarations: [ViewProfileComponent, EditProfileComponent],
  imports: [
    ProfileRoutingModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ProfileEffects])
  ],
  providers: []
})
export class ProfileModule {

}