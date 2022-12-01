import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() childEvent = new EventEmitter<string>()

  @Output() btnClickEvent = new EventEmitter<number>();

  @Input("xyz")
  abc: string = '';

  @Input("userEmail")
  userEmail: string = '';

  onKeyUp(val: string) {
    // console.log(val);
    this.childEvent.emit(val)
  }

  onBtnClick() {
    this.btnClickEvent.emit(199);
  }
}
