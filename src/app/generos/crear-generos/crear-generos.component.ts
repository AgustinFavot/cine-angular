import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerosService } from '../generos.service';
import { generoCreacionDTO } from '../modelo/genero';

@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.css']
})
export class CrearGenerosComponent {
  
  errores: string [] = [];

  constructor(private router:Router, private service: GenerosService){}
  
  guardarCambios(genero: generoCreacionDTO): void {
    this.service.create(genero).subscribe(() => {
      this.router.navigate(['/generos'])
    }, error => console.log(error));
}
}
