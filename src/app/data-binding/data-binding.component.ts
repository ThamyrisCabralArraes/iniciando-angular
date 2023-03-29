import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'http://loiane.training';
  cursoAngular = true;
  urlImage = 'http://lorempixel.com.br/500/400/?2';

  valorInput: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return 'yes';
  }

  botaoClicado() {
    alert('cliquei');
  }

  onkeyUp(event: any) {
    this.valorInput = event.target.value;
  }

  salvarValor(event: any) {
    this.valorSalvo = event.value;
  }

  mouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}
}
