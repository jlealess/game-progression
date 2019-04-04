import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../models/user.models';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})

export class UserAvatarComponent implements OnInit {
  @Input() user: User;

  ngOnInit() {
  }
}
