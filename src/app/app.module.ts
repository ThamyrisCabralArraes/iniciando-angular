import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindingComponent,
    InputPropertyComponent,
    CounterOutputComponent,
    CicloDeVidaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CursosModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
