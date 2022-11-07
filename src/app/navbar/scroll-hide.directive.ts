import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollHide]'
})
export class ScrollHideDirective {

  lastScroll = 0;

  @HostListener('window:scroll', ['$event']) onScroll() {

    let currentScroll = window.pageYOffset;

    if(currentScroll > this.lastScroll && currentScroll >= 200) {
      this.renderer.addClass(this.hostElement.nativeElement, 'nav-hide');
      this.renderer.removeClass(this.hostElement.nativeElement, 'nav-show');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'nav-show');
      this.renderer.removeClass(this.hostElement.nativeElement, 'nav-hide');
    }

    this.lastScroll = currentScroll;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

}
