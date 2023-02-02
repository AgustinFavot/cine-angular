import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreacionDTO } from '../modelo/actor';

@Component({
  selector: 'app-crear-actores',
  templateUrl: './crear-actores.component.html',
  styleUrls: ['./crear-actores.component.css']
})
export class CrearActoresComponent {

  constructor(private router:Router){}

  guardarCambios(actor: actorCreacionDTO): void {
      console.log(actor);
      this.router.navigate(['/actores'])
  }
}
