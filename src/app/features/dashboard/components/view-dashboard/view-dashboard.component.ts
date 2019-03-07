import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfileState } from '../../../../modules/profile/store/selectors/profile.selector';
import { Game } from '../../../../models/game.models';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.scss']
})
export class ViewDashboardComponent implements OnInit {
  games$: Observable<Game[]>;
  games = [];
  finishedGames: number = 0;
  hoursPerDay: number = 0;
  timeRemaining: number = 0;
  unfinishedGames: number = 0;

  constructor(private store: Store<any>) { }

  calculateTimeRemaining() {
    const games = [...this.games];
    const hoursRemaining = games.filter(game => !game.isComplete)
      .map(game => {
        const hoursRemaining = game.numberOfHoursToComplete - game.numberOfHoursPlayed;
        return hoursRemaining;
      })
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    return hoursRemaining / this.hoursPerDay;
  }

  calculateFinishedGames() {
    const games = [...this.games];
    const finishedGames = games.filter((game) => game.isComplete);
    const unfinishedGames = games.filter((game) => !game.isComplete);
    return {
      finishedGames: finishedGames.length,
      unfinishedGames: unfinishedGames.length
    };
  }

  calculateProgressPercentage(property) {
    return `${(property / (this.unfinishedGames + this.finishedGames) * 100).toFixed(1)}%`
  }

  ngOnInit() {
    this.store.select('games').subscribe(
      data => {
        console.log(data);
        this.games$ = data;
        this.games = data.games;
        this.finishedGames = this.calculateFinishedGames().finishedGames;
        this.unfinishedGames = this.calculateFinishedGames().unfinishedGames;
      }
    )
    this.store.select(getProfileState).subscribe(
      data => {
        this.hoursPerDay = data.averageNumberOfHoursPerDay;
        this.timeRemaining = this.calculateTimeRemaining();
     }
   );
  }
}
