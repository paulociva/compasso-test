import {Directive, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
import * as octicons from '@primer/octicons';

@Directive({
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit {

  @Input('octicon') iconName: string;
  @Input() size: number;
  @Input() color: string;

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
