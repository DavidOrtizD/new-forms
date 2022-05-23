import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  private _baseUrl = 'https://restcountries.com/v3.1';

  get regions(): string[]{
    return [...this._regions];
  }

  constructor(private _http: HttpClient) { }

  public getCountriesByRegion(region: string): Observable<Countries[]> {
    return this._http.get<Countries[]>(`${this._baseUrl}/region/${region}?fields=cca3,name`);
  }
  public getBordersByCountry(country: string): Observable<any> {
    return this._http.get<any>(`${this._baseUrl}/alpha/${country}`);
  }
}
