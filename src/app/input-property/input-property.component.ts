import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs: ['nomeDoCurso'] pode ser usado assim mas é melhor em baixo
})
export class InputPropertyComponent {
  @Input() nomeDoCurso = '';

  constructor() {}
}
