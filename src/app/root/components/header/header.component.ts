import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() user: User

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
