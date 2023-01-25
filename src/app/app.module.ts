import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndicesGenerosComponent } from './generos/indices-generos/indices-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { EditarActoresComponent } from './actores/editar-actores/editar-actores.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndicesGenerosComponent,
    CrearGenerosComponent,
    IndiceActoresComponent,
    CrearActoresComponent,
    CrearPeliculasComponent,
    CrearCinesComponent,
    IndiceCinesComponent,
    EditarActoresComponent,
    EditarGenerosComponent,
    EditarPeliculasComponent,
    EditarCinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
