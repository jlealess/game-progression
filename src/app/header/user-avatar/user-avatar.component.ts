import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  @Input() user: {
    id: number,
    firstName: string,
    lastName: string,
    image: string,
    languageId: number,
    averageNumberOfHoursPerDay: number
  }

  ngOnInit() {
  }

}
