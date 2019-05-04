import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appFocus]' })
export class FocusDirective {
  constructor(private el: ElementRef) {}

  @HostListener('focus') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('blur') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
