import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  guardarCambios(): void {
      this.router.navigate([''])
  }
}
