import { Component, ViewEncapsulation } from '@angular/core';
// import { ProfileService } from './features/profile/services/profile.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfileState } from './modules/profile/store/selectors/profile.selector';
import { User } from './models/user.models';
import * as ProfileActions from './modules/profile/store/actions/profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  user$: Observable<User>;
  title = 'Game Progression';


  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new ProfileActions.FetchUserProfile());
    this.user$ = this.store.select(getProfileState)
  }

  // ngOnInit() {
  //   this.profileService.getUser().subscribe(
  //     (response) => {
  //       this.user = response;
  //     }
  //   );
  // }

  ngOnChanges() {
    console.log("changes");
  }

}
