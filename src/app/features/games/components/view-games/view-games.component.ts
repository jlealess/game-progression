import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGamesState } from '../../../../modules/games/store/selectors/games.selector';
import { Game } from '../../../../models/game.models';

@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.scss']
})
export class ViewGamesComponent implements OnInit {
  games$: Observable<Game[]>;
  
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.games$ = this.store.select(getGamesState);
  }
}
