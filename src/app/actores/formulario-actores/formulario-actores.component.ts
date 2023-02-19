import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../modelo/actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit{

  form!: FormGroup;

  placeHolder: string = "Biografia";

  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>

  @Input()
  modelo!:actorDTO;

  constructor(private formBuilder: FormBuilder){}
  
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['', Validators.required],
      biografia:['', Validators.minLength(5)],
      foto: ''     
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  onSubmint(){
    this.submit.emit(this.form.value);
  }

  markDown(texto: string){
      this.form.get('biografia')?.setValue(texto);
  }

  fileSelected(file: File){
    this.form.get('foto')?.setValue(file);
  }
}
