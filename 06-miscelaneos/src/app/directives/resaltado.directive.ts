import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor: string;

  constructor( private el:ElementRef) { 
    console.log("directiva llamda");
    // el.nativeElement.style.backgroundColor = "yellow";
   }

   @HostListener('mouseenter') mouseEntro(){
      this.el.nativeElement.style.backgroundColor = "yellow";
   }
   @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor = null;
 }

}
