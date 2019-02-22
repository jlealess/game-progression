import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() user: {
    id: number,
    firstName: string,
    lastName: string,
    image: string,
    languageId: number,
    averageNumberOfHoursPerDay: number
  }

  constructor() { }

  ngOnInit() {
  }

}
