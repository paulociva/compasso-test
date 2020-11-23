import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
// @ts-ignore
import * as octicons from '@primer/octicons';

@Directive({
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit {

  @Input('octicon') iconName = '';
  @Input() size = 0;
  @Input() color = '';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    if (this.iconExists()) {
      this.renderIcon();
    }
  }

  private iconExists(): boolean {
    return octicons[this.iconName] !== undefined;
  }

  private renderIcon() {
    const el: HTMLElement = this.elementRef.nativeElement;
    el.innerHTML = octicons[this.iconName].toSVG();
    this.setSize(el);
    this.setColor(el);
  }

  private setSize(element: HTMLElement): void {
    this.renderer.setStyle(element.firstChild, 'width', `${this.size}px`);
    this.renderer.setStyle(element.firstChild, 'height', '100%');
  }

  private setColor(element: HTMLElement): void {
    this.renderer.setStyle(element.firstChild, 'fill', this.color);
  }
}
