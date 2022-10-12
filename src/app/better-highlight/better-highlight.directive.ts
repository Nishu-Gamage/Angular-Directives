import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  
  @Input("appBetterHighlight") defaultColor:string = "transparent";  
  @Input() highlightColor:string = "blue";
  @HostBinding("style.backgroundColor") backgroundcolor:string = "transparent";
  
  constructor(private renderer:Renderer2, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,"background-color","Yellow")
    this.renderer.setStyle(this.elementRef.nativeElement,"padding",".5em")
  }

  @HostListener("mouseenter") mouseOver(eventdata:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue")
    // this.backgroundcolor="blue";
    this.backgroundcolor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseLeave(eventdata:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,"background-color","transparent")
    // this.backgroundcolor="pink";
    this.backgroundcolor = this.defaultColor;
  }

}