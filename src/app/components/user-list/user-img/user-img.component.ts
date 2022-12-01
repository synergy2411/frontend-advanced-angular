import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent {

  @Output() childEvent = new EventEmitter<any>()
  @Input("user") user: any;

  onBtnClick() {
    this.childEvent.emit(this.user)
  }
}
