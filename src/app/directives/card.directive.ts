import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {

  constructor(private el: ElementRef) { (1)
      // el.nativeElement.style.backgroundColor = "gray";
      // el.nativeElement.style.fontStyle = 'italic';
      
    }
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('green');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }
    
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
