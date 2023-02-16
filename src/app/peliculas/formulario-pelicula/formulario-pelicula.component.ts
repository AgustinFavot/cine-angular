import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreationDTO } from '../DTOs/PeliculaCreationDTO';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit{

  /*Variables*/
  form!: FormGroup; 

  @Output()
  submit: EventEmitter<PeliculaCreationDTO> = new EventEmitter<PeliculaCreationDTO>();

  /*Constructor */
  constructor(private formBuilder: FormBuilder){}


  /*Implementacion de metodos*/
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      resumen:['',],
      triler:['',],
      enCine:['',], 
      poster:['',],
      fechaLanzamiento:['',]
    });
  }

  markDown(texto: string){
    this.form.get('resumen')?.setValue(texto);
  }

  fileSelected(file: File){
    this.form.get('poster')?.setValue(file);
  }

  onSubmint(){
    this.submit.emit(this.form.value);
  }
}
