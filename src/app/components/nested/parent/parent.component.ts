import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  title = "Awesome App";

  theValue: string = '';

  userEmail = "test@test.com"

  parentFunc(str: string) {
    // alert("Who's this?")
    // console.log("[PARENT] ", str);
    this.theValue = str;
  }

  parentClick(value: number) {
    alert("Clicked on Parent - " + value);
  }

}
