import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  //Se inicializa el servicio http
  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;
    //retorna un Observable de tipo Country
    return this.http.get<Country[]>( url );
  }

  buscarPorCapital( termino: string ): Observable<Country[]>{
    const url = `${this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>(url);
  }
  getPaisPorAlpha( id: string | null):Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }

  buscarPorRegion( termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>(url);
  }
}