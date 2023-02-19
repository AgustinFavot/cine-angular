import { Component, EventEmitter, Input, Output } from '@angular/core';
import { __values } from 'tslib';
import { toBase64 } from '../helper';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {

  imgBase64: String = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd7lju56vlbdri.cloudfront.net%2Fvar%2Fezwebin_site%2Fstorage%2Fimages%2F_aliases%2Fimg_1col%2Fnoticias%2Fsolar-orbiter-toma-imagenes-del-sol-como-nunca-antes%2F9437612-1-esl-MX%2FSolar-Orbiter-toma-imagenes-del-Sol-como-nunca-antes.jpg&imgrefurl=https%3A%2F%2Fwww.agenciasinc.es%2FNoticias%2FSolar-Orbiter-toma-imagenes-del-Sol-como-nunca-antes&tbnid=XjZyWtV9Sb2xrM&vet=12ahUKEwjst5vR1Jz9AhVHrZUCHXDmCNsQMygUegUIARCGAg..i&docid=NW_U8ajlQmQKHM&w=1299&h=845&q=imagenes&ved=2ahUKEwjst5vR1Jz9AhVHrZUCHXDmCNsQMygUegUIARCGAg';

  @Input()
  urlImg?: string;

  @Output()
  fileSelected: EventEmitter<File> = new EventEmitter<File>();

  change(event: any){
    if(event.target.files.length > 0 )
    {
      const file: File = event.target.files[0];
      toBase64(file).then((__values:any) => {
        console.log(__values)
        this.imgBase64 = __values})
      .catch(error => console.log(error));
      this.fileSelected.emit(file);
      this.urlImg='';
    }
  }
}
