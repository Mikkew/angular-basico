import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ numero }}</h2>
      <h3>
        La base es: <strong>{{ base }}</strong>
      </h3>

      <button (click)="acumular(-base)">-{{ base }}</button>
      <button (click)="restaurar()">Restaurar</button>
      <button (click)="acumular(base)">+{{ base }}</button>
    </div>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 0;
  base: number = 5;

  acumular(valor: number = 0) {
    this.numero += valor;
  }

  restaurar() {}
}
