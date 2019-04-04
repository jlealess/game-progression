import { Component, OnInit, Output } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  getTimeRemaining,
  getFinishedGames,
  getUnfinishedGames
} from "src/app/modules/dashboard/store/selectors/dashboard.selector";

@Component({
  selector: "app-dashboard-root",
  templateUrl: "./dashboard-root.component.html",
  styleUrls: ["./dashboard-root.component.scss"]
})
export class DashboardRootComponent implements OnInit {
  @Output() timeRemaining$: Observable<number>;
  @Output() finishedGames$: Observable<number>;
  @Output() unfinishedGames$: Observable<number>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.timeRemaining$ = this.store.select(getTimeRemaining);
    this.finishedGames$ = this.store.select(getFinishedGames);
    this.unfinishedGames$ = this.store.select(getUnfinishedGames);
  }
}
