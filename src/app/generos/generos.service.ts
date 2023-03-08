import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';
import { generoCreacionDTO, generoDTO } from './modelo/genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private url = environment.apiURL + 'generos';

  constructor(private http: HttpClient) { }

  public getAll(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('RecordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<generoDTO[]>(this.url, {observe: 'response', params});
  }

  public getById(id: number): Observable<generoDTO>{
    let urlById = this.url.concat('/').concat(id.toString());
    console.log(urlById);
    return this.http.get<generoDTO>(urlById);
  }

  public create(genero: generoCreacionDTO) {
    console.log(this.url)
    return this.http.post(this.url, genero);
  }

  public update(id: number, genero: generoCreacionDTO){
    let urlUpdate = this.url.concat('/editar/').concat(id.toString());
    console.log(urlUpdate);
    return this.http.put(urlUpdate, genero);
  }
  
  public delete(id: number) {
    let urlDelete = this.url.concat('/').concat(id.toString());
    return this.http.delete(urlDelete);
  }
}
