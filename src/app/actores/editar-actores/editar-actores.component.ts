import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../modelo/actor';

@Component({
  selector: 'app-editar-actores',
  templateUrl: './editar-actores.component.html',
  styleUrls: ['./editar-actores.component.css']
})
export class EditarActoresComponent implements OnInit {
  
  modelo!: actorDTO;

  constructor(private activateRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {
      console.log(param['id']);
    })
  }

  guardarCambios(actor: actorCreacionDTO): void {
    console.log(actor);
  }
}
