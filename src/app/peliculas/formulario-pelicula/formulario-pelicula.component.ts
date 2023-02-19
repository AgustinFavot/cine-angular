import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModelo } from 'src/app/utilidades/selector-multiple/MultipleSelectorModelo';
import { PeliculaCreationDTO, PeliculaDTO } from '../DTOs/PeliculaCreationDTO';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit{

  /*Variables*/
  form!: FormGroup; 

  placeHolder: string = "Resumen";

  @Input() /* Lo que entra */
  modelo?: PeliculaDTO;

  @Output()/* Lo que sale */
  submit: EventEmitter<PeliculaCreationDTO> = new EventEmitter<PeliculaCreationDTO>();

  generosNoSeleccionados: MultipleSelectorModelo[] = [
    {key: 1, value:"Comedia"},
    {key: 2, value:"Terror"},
    {key: 3, value:"Drama"},
    {key: 4, value:"Accion"},
    {key: 5, value:"Aventura"}
  ]

  generosSeleccionados: MultipleSelectorModelo[] = [];


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
      fechaLanzamiento:['',],
      generosId: ''
    });

    if(this.modelo !== undefined)
    {
      console.log(this.modelo)
      this.form.patchValue(this.modelo);
    }    
  }

  markDown(texto: string){
    this.form.get('resumen')?.setValue(texto);
  }

  fileSelected(file: File){
    this.form.get('poster')?.setValue(file);
  }

  onSubmint(){
    const generosId = this.generosSeleccionados.map(val => val.key)
    this.form.get('generosId')?.setValue(generosId)    
    this.submit.emit(this.form.value);
  }
}
