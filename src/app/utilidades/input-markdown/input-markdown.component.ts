import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Output()//Para enviar esta data al componente padre
  changeMarkDown: EventEmitter<string> = new EventEmitter<string>();

  markDownContent = "";

  constructor(){}

  inputTextArea(texto: string): void {
    console.log(texto);
    this.markDownContent = texto;
    this.changeMarkDown.emit(texto);
  }
}
