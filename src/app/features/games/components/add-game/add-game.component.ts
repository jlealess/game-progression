import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Platform } from 'src/app/models/platform.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getPlatforms } from 'src/app/modules/games/store/selectors/games.selector';
import * as GamesActions from '../../../../modules/games/store/actions/games.actions';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  platforms$: Observable<Platform[]>;
  addGame: FormGroup;

  constructor(private router: Router, private store: Store<any>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.addGame = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'numberOfHoursToComplete': new FormControl(null, Validators.required),
      'priority': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
      'platformId': new FormControl(0)
    });
    this.platforms$ = this.store.select(getPlatforms);
  }

  onCancel(e) {
    e.preventDefault();
    if (this.addGame.dirty) {
      let cancel = confirm("You have unsaved changes. Are you sure you want to exit?");
      if (!cancel) {
        return;
      }
    };
    this.router.navigate(['games']);
  }

  onReset() {
    this.addGame.reset();
  }

  onSubmit() {
    const game = {
      name: this.addGame.value.name,
      image: this.addGame.value.image,
      priority: parseFloat(this.addGame.value.priority),
      numberOfHoursToComplete: parseFloat(this.addGame.value.numberOfHoursToComplete),
      platformId: this.addGame.value.platformId,
      numberOfHoursPlayed: 0,
      isComplete: false,
    }
    this.store.dispatch(new GamesActions.AddGame(game));
    this.router.navigate(['games']);
  }}
