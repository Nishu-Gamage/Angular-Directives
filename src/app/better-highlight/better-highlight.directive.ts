import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private renderer:Renderer2, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color","Yellow")
    this.renderer.setStyle(this.elementRef.nativeElement,"padding",".5em")
  }

}
