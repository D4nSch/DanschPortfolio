import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollHide]'
})
export class ScrollHideDirective {

  lastScroll = 0;

  @HostListener('window:scroll', ['$event']) onScroll() {

    let currentScroll = window.pageYOffset;
    
    if(currentScroll === 0) {
      this.renderer.removeClass(this.hostElement.nativeElement, 'nav-show-scroll');
      this.renderer.removeClass(this.hostElement.nativeElement, 'nav-hide');
    } else if(currentScroll > this.lastScroll) {
      this.renderer.addClass(this.hostElement.nativeElement, 'nav-hide');
      this.renderer.removeClass(this.hostElement.nativeElement, 'nav-show-scroll');
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'nav-show-scroll');
      this.renderer.removeClass(this.hostElement.nativeElement, 'nav-hide');
    }

    this.lastScroll = currentScroll;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

}
