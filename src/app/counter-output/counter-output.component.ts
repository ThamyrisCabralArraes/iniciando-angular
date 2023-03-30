import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: any;

  incrementa() {
    console.log(this.campoValorInput.nativeElement.value);
    this.valor += 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor -= 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  // constructor() {}
}
