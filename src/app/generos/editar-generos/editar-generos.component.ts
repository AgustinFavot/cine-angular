import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../modelo/genero';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})
export class EditarGenerosComponent {

  constructor(private router:Router){}
  
  guardarCambios(genero: generoCreacionDTO): void {
    console.log(genero);
    this.router.navigate(['/generos'])
  }
}
