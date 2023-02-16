import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaCreationDTO } from '../DTOs/PeliculaCreationDTO';

@Component({
  selector: 'app-crear-peliculas',
  templateUrl: './crear-peliculas.component.html',
  styleUrls: ['./crear-peliculas.component.css']
})
export class CrearPeliculasComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardarCambios(pelicula: PeliculaCreationDTO): void {
      console.log(pelicula);
  }
}
