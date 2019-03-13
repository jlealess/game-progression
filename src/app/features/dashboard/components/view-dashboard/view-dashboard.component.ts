import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: "app-view-dashboard",
  templateUrl: "./view-dashboard.component.html",
  styleUrls: ["./view-dashboard.component.scss"]
})
export class ViewDashboardComponent implements OnInit {
  @Input() timeRemaining: number;
  @Input() finishedGames: number;
  @Input() unfinishedGames: number;

  constructor() { }

  calculateProgressPercentage(property: number) {
    return `${(
      (property / (this.unfinishedGames + this.finishedGames)) *
      100
    ).toFixed(1)}%`;
  }

  ngOnInit() {}
}
