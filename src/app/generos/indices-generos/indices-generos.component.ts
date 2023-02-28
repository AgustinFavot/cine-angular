import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../modelo/genero';

@Component({
  selector: 'app-indices-generos',
  templateUrl: './indices-generos.component.html',
  styleUrls: ['./indices-generos.component.css']
})
export class IndicesGenerosComponent implements OnInit{
  
  generos: generoDTO[];

  cantidadTotalRegistros;

  cantidadRegistrosMostrar = 10;

  currentPage = 1;

  displayedColumns: string[] = ['id','nombre'];

  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor(private service: GenerosService){}

  ngOnInit(): void {
    this.cargarRegistrod(this.currentPage, this.cantidadRegistrosMostrar);
  }

  cargarRegistrod(pagina: number,cantidadRegistrosMostrar: number ){
    this.service.getAll(pagina, cantidadRegistrosMostrar ).subscribe((response: HttpResponse<generoDTO[]>) => {
      this.generos = response.body;
      this.cantidadTotalRegistros = response.headers.get("cantidadTotalRegistros");
      if(this.table !== undefined){
        this.table.renderRows();
      }
    }, error => console.log(error));
  }

  actualizarPaginator(datos: PageEvent){
    this.currentPage = datos.pageIndex + 1;
    this.cantidadRegistrosMostrar = datos.pageSize;
    this.cargarRegistrod(this.currentPage, this.cantidadRegistrosMostrar);
  }

  eliminar(id: number)
  {
      this.service.delete(id).subscribe(() => {
        this.cargarRegistrod(this.currentPage, this.cantidadRegistrosMostrar); 
      }, (error) => console.log(error))
  }
}
