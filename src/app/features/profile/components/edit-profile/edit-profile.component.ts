import { Component, OnInit, Input } from '@angular/core';
import { ProfileService, User } from 'src/app/services/profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() user: User;
  editProfile: FormGroup;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profileService.getUser().subscribe(
      (data) => {
        this.user = data;
        this.editProfile.patchValue(data);
      }
    );

    this.editProfile = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required),
      'averageNumberOfHoursPerDay': new FormControl(null, Validators.required)
    });
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
      ...this.user,
      firstName: this.editProfile.value.firstName,
      lastName: this.editProfile.value.lastName,
      image: this.editProfile.value.image,
      averageNumberOfHoursPerDay: this.editProfile.value.averageNumberOfHoursPerDay      
    }
    this.profileService.updateUser(user).subscribe(
      (response) => {
        this.router.navigate(['my-profile']);
      }
    );
  }
}
