import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MultipleSelectorModelo } from './MultipleSelectorModelo';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit{
  
  /* Variables */
  @Input()
  seleccionados: MultipleSelectorModelo[] = [];
  
  @Input()
  deseleccionados: MultipleSelectorModelo[] = [];

  @Output()
  submit: EventEmitter<MultipleSelectorModelo> = new EventEmitter<MultipleSelectorModelo>();

  /* Metodos */ 
  ngOnInit(): void {
    
  }

  seleccionarTodo(): void 
  {
      this.seleccionados.push(...this.deseleccionados);
      this.deseleccionados = [];
  }

  deseleccionarTodo(): void /* Pasar todo lo seleccionado a deseleccionado*/
  {
    this.deseleccionados.push(...this.seleccionados); /* Descontruccion del arreglo */
    this.seleccionados = [];
  }

  seleccionar(item: MultipleSelectorModelo, index: number): void
  {
    this.seleccionados.push(item)
    this.deseleccionados.splice(index,1)
  }
  
  deseleccionar(item: MultipleSelectorModelo, index: number): void
  {
    this.deseleccionados.push(item)
    this.seleccionados.splice(index,1)
  }
}
