import {Component, inject , HostBinding, Input, ViewEncapsulation, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className='control';
  // @HostListener('click') onClicked() {
  //   console.log('clicked');
  // }
  private el = inject(ElementRef);

  @Input({required: true}) label!: string;

  onClick(){
    console.log('click');
    console.log(this.el);
  }
}
