import { Component } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  markDownContent = "";

  constructor(){}

  inputTextArea(texto: string): void {
    console.log(texto);
    this.markDownContent = texto;
  }
}
