import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  user: {} = {
    id:	1,
    firstName:	"Katie",
    lastName:	"Egervari",
    image:	"profile-image.jpg",
    languageId:	1,
    averageNumberOfHoursPerDay:	2
  };
  title = 'Game Progression';

}
