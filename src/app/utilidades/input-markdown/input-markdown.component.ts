import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Output()//Para enviar esta data al componente padre
  changeMarkDown: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeHolderTextArea: string = "Texto";
  
  @Input()
  markDownContent?: string;

  constructor(){}
}
