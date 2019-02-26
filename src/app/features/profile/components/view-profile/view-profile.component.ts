import { Component, OnInit, Input } from '@angular/core';
import { ProfileService, User } from 'src/app/services/profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  user: User

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUser().subscribe(
      (data) => {
        this.user = data;
      }
    );
  }
}
