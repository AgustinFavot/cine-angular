import { Component } from '@angular/core';
import { __values } from 'tslib';
import { toBase64 } from '../helper';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {

  imgBase64!: String;

  change(event: any){
    if(event.target.files.length > 0 )
    {
      const file: File = event.target.files[0];
      toBase64(file).then((__values:any) => this.imgBase64 = __values);
    }
  }
}
