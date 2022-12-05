import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elRef: ElementRef) {
    // console.log(this.elRef);
    this.elRef.nativeElement.style.backgroundColor = '#45ff45';
    this.elRef.nativeElement.style.fontSize = '1.8em';
    this.elRef.nativeElement.style.color = '#444';
  }

}


// <div appAppHighlight> </div>

// <input type="text" class="txtinput" />

// .css file

// input {
//   background : green;
// }

// [type='text']{

// }

// .txtInput{}
