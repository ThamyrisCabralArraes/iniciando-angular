import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'estudando-angular';
  valorInicial = 0;

  deletarCiclo = false;

  mudarValor() {
    this.valorInicial += 1;
  }

  deletar() {
    this.deletarCiclo = true;
  }

  restaurar() {
    this.deletarCiclo = false;
  }
}
