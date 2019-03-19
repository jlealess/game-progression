import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-headline',
  templateUrl: './feature-headline.component.html',
  styleUrls: ['./feature-headline.component.scss']
})
export class FeatureHeadlineComponent implements OnInit {
  @Input() text: string

  constructor() { }

  ngOnInit() {
  }

}
