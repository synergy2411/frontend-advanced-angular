import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-action',
  templateUrl: './todo-action.component.html',
  styleUrls: ['./todo-action.component.css']
})
export class TodoActionComponent {

  item: string = '';
  @Output() childEvent = new EventEmitter<string>();

  onAdd() {
    // console.log(this.item);
    this.childEvent.emit(this.item);
  }

}
