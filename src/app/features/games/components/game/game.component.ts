import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../../models/game.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() games: Game[];
  @Input() game: Game

  constructor() { }

  ngOnInit() {
  }

  calculateProgress(game) {
    return (game.numberOfHoursPlayed / game.numberOfHoursToComplete) * 100;
  }

}
