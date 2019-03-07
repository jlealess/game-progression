import { Component, OnInit, Output } from '@angular/core';
import { Game } from '../../../../models/game.models';

@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.scss']
})
export class ViewGamesComponent implements OnInit {
  /** remove after getting data from API */
  @Output() game: Game = {
    "id": 9,
    "dateCreated": "2018-09-11T14:07:46+00:00",
    "name": "Super Mario Odyssey",
    "image": "https://howlongtobeat.com/gameimages/42833_Super_Mario_Odyssey.jpg",
    "platformId": 2,
    "priority": 10,
    "numberOfHoursPlayed": 12.5,
    "numberOfHoursToComplete": 25,
    "isComplete": true
  }
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
  ];
  /** end here */

  getGamePlatform(id) {
    return this.platforms.filter((platform) => platform.id === id);
  }

  constructor() { }

  ngOnInit() {
  }

}
