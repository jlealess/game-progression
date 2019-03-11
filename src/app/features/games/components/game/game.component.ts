import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../../models/game.models';
import { Platform } from '../../../../models/platform.models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() games: Game[];
  @Input() game: Game;
  @Input() platforms: Platform[];

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  calculateProgress(game) {
    return (game.numberOfHoursPlayed / game.numberOfHoursToComplete) * 100;
  }
}
