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
S
  public getAll(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('RecordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<generoDTO[]>(this.url, {observe: 'response', params});
  }

  public getById(id: number): Observable<generoDTO>{
    let urlById = this.url.concat('/').concat(id.toString());
    return this.http.get<generoDTO>(urlById);
  }

  public create(genero: generoCreacionDTO) {
    return this.http.post(this.url, genero);
  }

  public update(id: number, genero: generoCreacionDTO){
    let urlEdit = this.url.concat('/editar/').concat(id.toString());
    return this.http.put(urlEdit, genero);
  }
}
