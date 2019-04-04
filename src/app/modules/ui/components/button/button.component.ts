import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonLabel: string
  @Input() class: string
  @Input() type: string;
  @Input() disabledValue: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
