import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ActoresService } from '../actores.service';
import { actorDTO } from '../modelo/actor';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent  implements OnInit{

  currenPage = 1;
  cantidadRegistrosAMostrar: number = 10;
  displayedColumns = ['id','foto' ,'nombre', 'apellido', 'acciones']

  actores: actorDTO[] = [];
  
  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor(private service: ActoresService){}

  ngOnInit(): void {
    this.cargarRegistros(this.currenPage, this.cantidadRegistrosAMostrar);  
  }

  cargarRegistros(currentPage: number, cantidadRegistrosAMostrar: number){
    this.service.getAll(currentPage, cantidadRegistrosAMostrar ).subscribe((response: HttpResponse<actorDTO[]>) => {
      this.actores = response.body;
      this.cantidadRegistrosAMostrar = parseInt(response.headers.get("cantidadTotalRegistros"));
      if(this.table !== undefined){
        this.table.renderRows();
      }
    }, error => console.log(error));
  }

  eliminar(id: number)
  {
    if(id !== undefined){
      this.service.delete(id).subscribe(() => {
        this.table.renderRows();
      }, (error) => console.log(error))
    }
  }

}
