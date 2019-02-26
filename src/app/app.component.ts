import { Component, ViewEncapsulation } from '@angular/core';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private profileService: ProfileService) {}
  
  user: {};
  title = 'Game Progression';

  ngOnInit() {
    this.profileService.getUser().subscribe(
      (response) => {
        this.user = response;
      }
    );
  }

  ngOnChanges() {
    console.log("changes");
  }

}
