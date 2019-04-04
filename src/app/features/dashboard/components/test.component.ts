import { Component, Input } from "@angular/core";
import { getFinishedGames } from 'src/app/modules/dashboard/store/selectors/dashboard.selector';

@Component({
  template: `{{finishedGames}}`,
  selector: 'test-component',
})
export class TestComponent {
  @Input() finishedGames;
}