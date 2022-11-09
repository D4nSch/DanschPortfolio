import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssHandlerService {

  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }


  addCssClass(cssClass: string) {
    this.renderer.addClass(document.body, cssClass);
  }

  removeCssClass(cssClass: string) {
    this.renderer.removeClass(document.body, cssClass);
  }
}
