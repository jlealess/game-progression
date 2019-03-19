import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-feature-header',
  templateUrl: './feature-header.component.html',
  styleUrls: ['./feature-header.component.scss']
})
export class FeatureHeaderComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
