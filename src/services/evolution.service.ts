import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EvolutionService {
  private apiUrl = 'https://pokeapi.co/api/v2/evolution-chain/';

  constructor(private http: HttpClient) {}

  getEvolutionChain(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}`;
    return this.http.get(url);
  }
}
