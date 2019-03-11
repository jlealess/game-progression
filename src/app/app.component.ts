import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfileState } from './modules/profile/store/selectors/profile.selector';
import { getGamesState } from './modules/games/store/selectors/games.selector';
import { User } from './models/user.models';
import { Game } from './models/game.models';
import * as ProfileActions from './modules/profile/store/actions/profile.actions';
import * as GamesActions from './modules/games/store/actions/games.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  user$: Observable<User>;
  games$: Observable<Game[]>;

  title = 'Game Progression';

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ProfileActions.FetchUserProfile());
    this.store.dispatch(new GamesActions.FetchGames());
    this.user$ = this.store.select(getProfileState);
    this.games$ = this.store.select(getGamesState);
  }
}
