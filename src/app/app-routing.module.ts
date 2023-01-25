import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { EditarActoresComponent } from './actores/editar-actores/editar-actores.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { IndicesGenerosComponent } from './generos/indices-generos/indices-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  
  { path: 'generos' , component: IndicesGenerosComponent},
  { path: 'generos/crear' , component: CrearGenerosComponent},
  { path: 'generos/editar/:id' , component: EditarGenerosComponent},

  { path: 'actores' , component: IndiceActoresComponent},
  { path: 'actores/crear' , component: CrearActoresComponent},
  { path: "actores/editar/:id" , component: EditarActoresComponent},

  { path: 'peliculas' , component: CrearPeliculasComponent},
  { path: 'peliculas/editar/:id' , component: EditarPeliculasComponent},

  { path: 'cines' , component: IndiceCinesComponent},
  { path: 'cines/crear' , component: CrearCinesComponent},
  { path: 'cines/editar/:id' , component: EditarCinesComponent},

  { path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
