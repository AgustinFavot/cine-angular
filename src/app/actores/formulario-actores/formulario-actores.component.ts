import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { actorCreacionDTO } from '../modelo/actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit{

  form!: FormGroup;

  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>

  @Input()
  modelo!:actorCreacionDTO;

  constructor(private formBuilder: FormBuilder){}
  
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['', Validators.required]      
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  onSubmint(){
    this.submit.emit(this.form.value);
  }
}
