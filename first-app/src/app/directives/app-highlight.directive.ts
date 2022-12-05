import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elRef: ElementRef) {
    // console.log(this.elRef);
    this.elRef.nativeElement.style.backgroundColor = '#45ff45';
    this.elRef.nativeElement.style.color = '#444';
    this.elRef.nativeElement.style.boxShadow = '0 0 25px 10px rgba(0,0,0,.5)';
    this.elRef.nativeElement.style.marginTop = '30px';
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


// ng g d directives/highlight
