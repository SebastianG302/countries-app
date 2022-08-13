import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/'

  //Se inicializa el servicio http
  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<any>{
    const url = `${ this.apiUrl }/name/${ termino }`;
    //retorna un Observable de tipo Country
    return this.http.get<Country[]>( url )
  }
}
