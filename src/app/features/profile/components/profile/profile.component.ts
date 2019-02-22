import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { ConfigService, User } from 'src/app/config/config.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getUser().subscribe(
      (data) => {
        this.user = data;
      }
    );
  }

}
