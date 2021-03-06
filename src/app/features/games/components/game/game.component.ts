import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../../models/game.models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: Game;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  calculateCompletionDate(daysToComplete) {
    

  }
}
