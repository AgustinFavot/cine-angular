import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  form!: FormGroup;

  generos=[
    { id:1, nombre: 'Drama'},
    { id:2, nombre: 'Acción'},
    { id:3, nombre: 'Comedia'},
    { id:4, nombre: 'Terror'}
  ]

  peliculas=[
    {titulo:'Spider Man', generoId:[2], enCines: true, proximoEstrenos: false, poster:'https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp'},
    {titulo:'Inferno', generoId:[2], enCines: true, proximoEstrenos: false, poster:'https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp'},
    {titulo:'Son como niños', generoId:[2], enCines: true, proximoEstrenos: false, poster:'https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp'},
    {titulo:'Alcaldia', generoId:[2], enCines: false, proximoEstrenos: true, poster:'https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp'},
    {titulo:'Misterio 3', generoId:[4], enCines: true, proximoEstrenos: false, poster:'https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp'},
    {titulo:'Angeles y Demonio', generoId:[2], enCines: false, proximoEstrenos: true, poster:'https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp'}
  ]

  peliculasOrginial = this.peliculas;

  formOriginal = {
    titulo:'',
    generoId: 0,
    enCines: false,
    proximoEstrenos: false
  }

  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRout: ActivatedRoute){}

  ngOnInit(): void {

    this.form = this.formBuilder.group(this.formOriginal);

    this.form.valueChanges.subscribe(valores =>{ 
      this.peliculas= this.peliculasOrginial;
      this.buscarPelicula(valores);
      this.paramUrl();
      })
  } 

  buscarPelicula(valor: any){
       if(valor.titulo){
          this.peliculas = this.peliculas.filter(x => x.titulo.indexOf(valor.titulo) !== -1)
       }

       if(valor.generoId !== 0){
        this.peliculas = this.peliculas.filter(x => x.generoId.indexOf(valor.generoId) !== -1)
       }

       if(valor.enCines){
        this.peliculas = this.peliculas.filter(x => x.enCines.valueOf());
       }

       
       if(valor.proximoEstrenos){
        this.peliculas = this.peliculas.filter(x => x.proximoEstrenos.valueOf());
       }      
  }

  limpiar(): void{
    this.form.patchValue(this.formOriginal);
  }

  private paramUrl(){
    var queryString=[];

    var valoresForm = this.form.value;

    if(valoresForm.titulo) {
      queryString.push(`titulo=${valoresForm.titulo}`)
    }

    if(valoresForm.generoId != '0') {
      queryString.push(`generosId=${valoresForm.generoId}`)
    }

    if(valoresForm.enCines) {
      queryString.push(`enCines=${valoresForm.enCines}`)
    }

    if(valoresForm.proximoEstrenos) {
      queryString.push(`proximoEstrenos=${valoresForm.proximoEstrenos}`)
    }

    this.location.replaceState('peliculas/buscar', queryString.join('&'));
  }

  private readValueURL(){
    this.activatedRout.queryParams.subscribe(param => {
      var val: any = {};

      if(param['titulo']){
        val.titulo = param['titulo'];
      }

      
      if(param['generosId']){
        val.titulo = Number(param['generosId']);
      }

      
      if(param['enCines']){
        val.titulo = param['enCines'];
      }

      
      if(param['proximoEstrenos']){
        val.titulo = param['proximoEstrenos'];
      }

      this.form.patchValue(val);
    })
  }

}
