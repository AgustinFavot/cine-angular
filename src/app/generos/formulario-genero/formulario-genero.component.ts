import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDTO, generoDTO } from '../modelo/genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})

export class FormularioGeneroComponent implements OnInit{
  
  form!: FormGroup;

  @Input() //propiedad de una clase como entrada
  modelo: generoCreacionDTO;

  @Input()
  errores: string[] = [];

  @Output()
  onSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>


  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
      this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(): String {
    var campo = this.form.get('nombre');    
    
    if(campo?.hasError('required')) {
      return 'El campo nombre es requerido';
    }
    
    if(campo?.hasError('minlength')){
      return 'Minimo 5 caracteres'
    }
    
    return '';
  }
}


//interpolación {{}} -> es un mecanismo de Angular de sustitución de una expresión por un valor en una plantilla