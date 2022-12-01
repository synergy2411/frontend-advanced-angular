import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  title = 'Awesome App';
  userEmail = 'test@test.com';
  theValue: string = '';
  parentFunc(str: string) {
    // alert("Who's this")
    this.theValue = str;
  }
  parentClick(value: number) {
    alert('Clicked on parent - ' + value);
  }
}
