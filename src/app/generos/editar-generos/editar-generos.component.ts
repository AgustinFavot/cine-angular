import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenerosService } from '../generos.service';
import { generoCreacionDTO, generoDTO } from '../modelo/genero';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})

export class EditarGenerosComponent implements OnInit{

  modelo: generoDTO;

  constructor(private router:Router, 
              private service: GenerosService,
              private activateRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.service.getById(params['id']).subscribe((genero) => {
        this.modelo = genero;
      }, (error) => console.log(error))
    })
  }
  
  guardarCambios(genero: generoCreacionDTO): void {
    this.service.update(this.modelo.id, genero).subscribe();
  }
}
