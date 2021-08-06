// tslint:disable: directive-selector
// tslint:disable: directive-class-suffix

import { Directive, ElementRef, Input } from '@angular/core';


/**
 * ## Example
 * ```html
 * <button [ngShow]="show">Create</button>
 * ```
 * ```ts
 * get show() {
 *   return false; // it will hide button. If you pass `true` it will show button.
 * }
 * ```
 */
@Directive({
  selector: '[ngShow]',
})
export class NgShow {
  constructor(private ngEl: ElementRef) {}

  @Input()
  set ngShow(condition: boolean) {
    this.show(condition);
  }

  private show(value: boolean): void {
    this.ngEl.nativeElement.style.display = value ? '' : 'none';
  }
}
