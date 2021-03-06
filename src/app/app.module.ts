import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, NavComponent, UserAvatarComponent } from './root/components';
import { ProfileService } from './modules/profile/services/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileModule } from './modules/profile/profile.module';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GamesModule } from './modules/games/games.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { GamesService } from './modules/games/services/games.service';
import { UiModule } from './modules/ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    UserAvatarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProfileModule,
    GamesModule,
    DashboardModule,
    UiModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [ProfileService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
