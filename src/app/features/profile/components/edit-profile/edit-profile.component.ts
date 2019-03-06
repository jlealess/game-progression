import { Component, OnInit, Input } from '@angular/core';
import { ProfileService, User } from '../../services/profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../../store/actions/profile.actions';
import { Observable } from 'rxjs';
import { getProfileState } from '../../store/selectors/profile.selector';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user$: Observable<User>;
  editProfile: FormGroup;

  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit() {
    this.editProfile = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'averageNumberOfHoursPerDay': new FormControl(null, Validators.required)
    });
    this.user$ = this.store.select(getProfileState);
    this.store.select(getProfileState).subscribe(
      data => {
        this.editProfile.patchValue(data);
      }
    );
  }

  onCancel(e) {
    e.preventDefault();
    if (this.editProfile.dirty) {
      let cancel = confirm("You have unsaved changes. Are you sure you want to exit?");
      if (!cancel) {
        return;
      }
    };
    this.router.navigate(['my-profile']);
  }

  onReset() {
    this.editProfile.reset();
  }

  onSubmit() {
    const user = {
      ...this.user$,
      firstName: this.editProfile.value.firstName,
      lastName: this.editProfile.value.lastName,
      image: this.editProfile.value.image,
      averageNumberOfHoursPerDay: this.editProfile.value.averageNumberOfHoursPerDay      
    }
    this.store.dispatch(new ProfileActions.UpdateUserProfile(user));
    this.router.navigate(['my-profile']);
  }
}
