import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {

  @Output() childEvent = new EventEmitter<string>()
  @Output() btnClickEvent = new EventEmitter<number>()
  @Input('xyz')
  abc: string = '';
  @Input('email')
  email: string = '';
  onKeyUp(val: string) {
    // console.log(val);
    this.childEvent.emit(val)
  }
  onBtnClick(){
    this.btnClickEvent.emit(199);
  }
}
