import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { GameInput } from 'src/app/models/game.models';
import { Observable } from 'rxjs';
import * as GamesActions from '../../../../modules/games/store/actions/games.actions';
import { getEditedGame } from 'src/app/modules/games/store/selectors/games.selector';
import { Platform } from 'src/app/models/platform.models';


@Component({
  selector: "app-edit-game",
  templateUrl: "./edit-game.component.html",
  styleUrls: ["./edit-game.component.scss"]
})
export class EditGameComponent implements OnInit {
  game$: Observable<GameInput>;
  game: GameInput;
  editGame: FormGroup;
  gameId: number;
  private sub: any;
  platforms: Platform[] = [
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

  constructor(private router: Router, private store: Store<any>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.gameId = +params["id"];
    });
    this.store.dispatch(new GamesActions.FetchGame(this.gameId));
    
    this.editGame = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'numberOfHoursPlayed': new FormControl(0, Validators.required),
      'numberOfHoursToComplete': new FormControl(null, Validators.required),
      'priority': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(10)]),
      'isComplete': new FormControl(false),
      'platformId': new FormControl(null)
    });
    this.game$ = this.store.select(getEditedGame);
    this.store.select(getEditedGame).subscribe(
      data => {
        // this.editGame.patchValue(data);
        if (data) {
          const game = data[0];
          this.game = game;
          this.editGame.patchValue(game);
        }
      }
    )
  }

  onCancel(e) {
    e.preventDefault();
    if (this.editGame.dirty) {
      let cancel = confirm("You have unsaved changes. Are you sure you want to exit?");
      if (!cancel) {
        return;
      }
    };
    this.router.navigate(['games']);
  }

  onReset() {
    this.editGame.reset();
  }

  onSubmit() {
    const game = {
      ...this.game,
      name: this.editGame.value.name,
      image: this.editGame.value.image,
      priority: parseFloat(this.editGame.value.priority),
      numberOfHoursToComplete: parseFloat(this.editGame.value.numberOfHoursToComplete),
      numberOfHoursPlayed: parseFloat(this.editGame.value.numberOfHoursPlayed),
      isComplete: this.editGame.value.isComplete,
      platformId: this.editGame.value.platformId
    }
    this.store.dispatch(new GamesActions.UpdateGame(game));
    this.router.navigate(['games']);
  }
}
