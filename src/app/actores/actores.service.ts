import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { actorCreacionDTO, actorDTO } from './modelo/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private url = environment.apiURL.concat('actores');
  
  constructor(private http: HttpClient) { }

  public getAll(pagina: number, cantidadRegistrosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('RecordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<actorDTO>(this.url, {observe: 'response', params})
  }

  public getById(id: number) {
    let urlById = this.url.concat('/').concat(id.toString());
    return this.http.get(urlById);
  }

  public create(actor: actorCreacionDTO) {
    return this.http.post(this.url, actor);
  }

  public update(id: number, actor: actorCreacionDTO){
    let urlUpdate = this.url.concat('/editar/').concat(id.toString());
    return this.http.put(urlUpdate, actor);
  }

  public delete(id: number) {
    let urlDelete = this.url.concat('/').concat(id.toString());
    return this.http.delete(urlDelete);
  }
}
