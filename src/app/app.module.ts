import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { UserAvatarComponent } from './header/user-avatar/user-avatar.component';
import { ServerService } from './server.service';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

const appRoutes: Routes = [
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
    component: ProfileComponent,
    data: {
      user: {
        id: 1,
        firstName: "Katie",
        lastName: "Egervari",
        image: "profile-image.jpg",
        languageId: 1,
        averageNumberOfHoursPerDay: 2
      }
    }
  },
  {
    path: 'my-profile/edit',
    component: EditProfileComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    UserAvatarComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
