import { Component, ViewEncapsulation } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private configService: ConfigService) {}
  
  user: {};
  title = 'Game Progression';

  ngOnInit() {
    this.configService.getUser().subscribe(
      (response) => {
        this.user = response;
      }
    );
  }

  ngOnChanges() {
    console.log("changes");
  }

}
