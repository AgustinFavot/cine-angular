import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  peliculasEnEstreno!: any;
  peliculasEnCine!:any;

  ngOnInit(): void {
    this.peliculasEnCine = [
        {
          titulo: 'Spider Man 1',
          fechaLanzamiento : new Date(),
          precio : 1400.52,
          poster: "https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp"
        },
        {
          titulo : 'Spider Man 2',
          fechaLanzamiento : new Date(),
          precio : 1400.52,
          poster: "https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp"
        },
        {
          titulo : 'Spider Man 3',
          fechaLanzamiento : new Date(),
          precio : 1400.52,
          poster: "https://imgs.search.brave.com/fos0wIvzlVeFJaI1fMfQZSDMg9geMjGzxMntsCstKLE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/X3NwbmVEOC10UnpJ/UUswajZ6amtBSGFI/YSZwaWQ9QXBp"
        }
      ]
  }

  manejarvotar(voto:number): void{
    alert(voto);
  }
}
