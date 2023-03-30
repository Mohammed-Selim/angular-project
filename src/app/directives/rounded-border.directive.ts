import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[RoundedBorder]'
})
export class RoundedBorderDirective implements OnChanges{
   @Input() borderColor: string = 'red';
   @Input() shadow: string = '5px 5px 5px 3px rgba(0,0,0,1)';
   @Input('RoundedBorder') borderRadius: string ='15px';
  constructor(private element:ElementRef) {
   
     }
  ngOnChanges(): void {
   // this.element.nativeElement.style['border-radius'] = '15px';
    this.element.nativeElement.style.border = `1px dotted ${this.borderColor}`;
    this.element.nativeElement.style['border-radius'] = `${this.borderRadius}`;
    // this.element.nativeElement.style.background-color = `3px dotted ${this.borderColor}`;
  }
  @HostListener('mouseover') mouseOverFunc() {
    this.element.nativeElement.style.border = `1px dotted ${this.borderColor}`;
    this.element.nativeElement.style['border-radius'] = `${this.borderRadius}`;
    this.element.nativeElement.style['box-shadow']=`${this.shadow}`
  }
  @HostListener('mouseout') mouseOutFunc() {
    this.element.nativeElement.style.border = `3px dotted ${this.borderColor}`;
    this.element.nativeElement.style['border-radius'] = `${this.borderRadius}`;
    this.element.nativeElement.style['box-shadow']=`none`
  }
}
