import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit{
  @Input()
  peliculas!: any;
  
  ngOnInit(): void {
  }

  remover(index: number) : void{
    this.peliculas.splice(index, 1);
  }
}
