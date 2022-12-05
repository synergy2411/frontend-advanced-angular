import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding('style.backgroundColor') bgColor: any;

  @HostListener("mouseenter")
  onmouseenter() {
    this.bgColor = '#45ff45'
  }

  @HostListener("mouseleave")
  onmouseleave() {
    this.bgColor = 'transparent'
  }

  constructor() { }

}
