import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EvolutionService {
  private apiUrl = 'https://pokeapi.co/api/v2/ability/';

  constructor(private http: HttpClient) {}

  getEncounterMethod(id: number): Observable<any> {
    const url = this.apiUrl + id;
    return this.http.get<any>(url);
  }
}
