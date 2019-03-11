import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGamesState, getPlatformsState } from '../../../../modules/games/store/selectors/games.selector';
import { Game } from '../../../../models/game.models';

@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.scss']
})
export class ViewGamesComponent implements OnInit {
  /* replace with data from state */
  platforms = [
    {
      "id": 1,
      "name": "PS4"
    },
    {
      "id": 2,
      "name": "Switch"
    },
    {
      "id": 3,
      "name": "Wii U"
    },
    {
      "id": 4,
      "name": "3DS"
    },
    {
      "id": 5,
      "name": "PC"
    }
  ]
  /* */
  games$: Observable<Game[]>;
  
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.games$ = this.store.select(getGamesState);
  }
}
