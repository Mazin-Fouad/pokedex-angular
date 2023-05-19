import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonData } from 'src/app/models/pokemon-data';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private httpClient: HttpClient) {}

  getPokemons(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}${id}/`);
  }
}
