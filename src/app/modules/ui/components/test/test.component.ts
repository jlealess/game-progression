import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Output() buttonLabel: string = "Click me"

  constructor() { }

  ngOnInit() {
  }

}
