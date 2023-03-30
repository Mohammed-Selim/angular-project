import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BGCOLOR]'
})
export class BGCOLORDirective implements OnChanges {
//  @Input('BGCOLOR') background: string ='blue';
@Input() background: string ='blue';
  constructor(private element:ElementRef) {
    this.element.nativeElement.style['background-color'] =` ${this.background}`;
   }
  ngOnChanges(): void {
    this.element.nativeElement.style['background-color'] = `${this.background}`;

  }

}
