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

  modelo: generoDTO;

  errores: String[] = [];

  constructor(private router:Router, 
              private service: GenerosService,
              private activateRoute: ActivatedRoute){}
  
  ngOnInit(): void {
      let id = parseInt(paramsId(this.activateRoute));
      this.service.getById(id).subscribe((genero) => {
        this.modelo = genero;
      }, (error) => console.log(error))
  }
  
  guardarCambios(genero: generoCreacionDTO): void {
    this.service.update(this.modelo.id, genero).subscribe(() => {

    }, (error) => console.log(error));
  }
}
