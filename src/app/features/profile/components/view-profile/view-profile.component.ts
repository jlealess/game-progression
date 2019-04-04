import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.models';
import { getProfileState } from '../../../../modules/profile/store/selectors/profile.selector';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})

export class ViewProfileComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.user$ = this.store.select(getProfileState)
  }
}
