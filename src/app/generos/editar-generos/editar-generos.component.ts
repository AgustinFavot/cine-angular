import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { paramsId } from 'src/app/utilidades/helper';
import { GenerosService } from '../generos.service';
import { generoCreacionDTO, generoDTO } from '../modelo/genero';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})

//ver Mostrar Errores Web Api
export class EditarGenerosComponent implements OnInit{

  model: generoDTO;

  errores: String[] = [];

  constructor(private router:Router, 
              private service: GenerosService,
              private activateRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    console.log('load EditarGenerosComponent')
      this.activateRoute.params.subscribe(params => {
        this.service.getById(params['id']).subscribe( genero => {
          this.model = genero;
          console.log('app-editar-generos: ', this.model)
        }, (error) => console.log(error))
      });      
  }
  
  guardarCambios(genero: generoCreacionDTO): void {
    this.service.update(this.model.id, genero).subscribe(() => {

    }, (error) => console.log(error));
  }
}
