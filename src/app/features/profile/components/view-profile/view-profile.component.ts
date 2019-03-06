import { Component, OnInit, Input } from '@angular/core';
import { ProfileService, User } from '../../services/profile.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfileState } from '../../store/selectors/profile.selector';

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
