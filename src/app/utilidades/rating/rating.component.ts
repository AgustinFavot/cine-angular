import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{

  @Input()
  maximoRating: number = 5;

  @Input()
  ratingSelected = 0;

  @Output()
  votar: EventEmitter<number> = new EventEmitter<number>;

  ratingAnterior= 0;

  arrRating: any = [];

  votado:boolean = false;

  ngOnInit(): void {
   this.arrRating = new Array(this.maximoRating).fill(0);
  }

  mouseEnter(index: number): void {
    this.ratingSelected = index +1;    
  }

  mouseLeave(): void {
    if(this.ratingAnterior !== 0){
      this.ratingSelected = this.ratingAnterior;
    }
    else{
      this.ratingSelected = 0;
    }
  }

  select(index:number): void{
    this.ratingSelected = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSelected;
    this.votar.emit(this.ratingSelected);
  }
}
