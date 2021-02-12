import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
// import { ContadorComponent } from './contador/contador/contador.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // ListadoComponent,
    // HeroeComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
