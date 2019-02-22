import { Component, OnInit, Input } from '@angular/core';
import { ConfigService, User } from 'src/app/config/config.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
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
