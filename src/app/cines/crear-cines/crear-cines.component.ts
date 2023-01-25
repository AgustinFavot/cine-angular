import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cines',
  templateUrl: './crear-cines.component.html',
  styleUrls: ['./crear-cines.component.css']
})
export class CrearCinesComponent implements OnInit {
  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardarCambios(): void {
      this.router.navigate(['/cines'])
  }
}
