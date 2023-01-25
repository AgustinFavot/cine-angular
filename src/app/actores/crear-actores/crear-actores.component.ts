import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-actores',
  templateUrl: './crear-actores.component.html',
  styleUrls: ['./crear-actores.component.css']
})
export class CrearActoresComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  guardarCambios(): void {
      this.router.navigate(['/actores'])
  }
}
