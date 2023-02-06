import { Component, EventEmitter, Input, Output } from '@angular/core';
import { __values } from 'tslib';
import { toBase64 } from '../helper';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {

  imgBase64!: String;

  @Input()
  urlImg!: string;

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
