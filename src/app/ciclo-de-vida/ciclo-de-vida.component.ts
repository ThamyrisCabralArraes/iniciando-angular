import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css'],
})
export class CicloDeVidaComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() valorInicial = 10;

  constructor() {
    // console.log(this.constructor);
  }

  ngOnChanges() {
    // console.log('ngOnChanges');
    //se tiver Input prop é melhor usar OnChanges
  }

  ngDoCheck() {
    // console.log('ngDoCheck');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
  }

  private log(hook: string) {
    // console.log(hook);
  }
  ngOnInit() {}
}
