import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  private _heroe: string = "Ironman";
  private _edad: number = 45;

  public get heroe(): string {
    return this._heroe;
  }

  public set heroe(value: string) {
    this._heroe = value;
  }

  public get edad(): number {
    return this._edad;
  }

  public set edad(value: number) {
    this._edad = value;
  }

  obtenerNombre(): string {
    return `${ this.heroe } - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.heroe = "Spiderman";
  }

  cambiarEdad(): void {
    console.log("Hola mm");
    
    this.edad = 23;
  }
} 
