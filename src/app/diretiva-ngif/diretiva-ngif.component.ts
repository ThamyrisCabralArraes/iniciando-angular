import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css'],
})
export class DiretivaNgifComponent {
  cursos: string[] = ['curso1'];

  mostrarCursos: boolean = true;

  btnMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
