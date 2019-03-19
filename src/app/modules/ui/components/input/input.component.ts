import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputName: string;
  @Input() inputLabel: string;
  @Input() errorMessage: string;
  @Input() inputType: string;
  @Input() parentForm: FormGroup;
  @Input() formControlName: string;

  constructor() { }

  ngOnInit() {
  }

}
