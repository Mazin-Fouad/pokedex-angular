import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[BackgroundStyle]',
})
export class BackgroundStyleDirective {
  constructor(elemRef: ElementRef) {}
}
