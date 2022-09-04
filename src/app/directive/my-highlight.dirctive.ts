import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class MyHighlightDirective {
  @Input() appHighlight="";

  constructor(private el:ElementRef) { 
  }

  ngOnInit(): void{
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
    this.el.nativeElement.style.fontStyle = 'italic';
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

    @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'white';
  }
}