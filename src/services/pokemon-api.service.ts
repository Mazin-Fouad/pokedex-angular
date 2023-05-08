import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonData } from 'src/app/models/pokemon-data';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private httpClient: HttpClient) {}

  getPokemons(id: number): Observable<PokemonData[]> {
    return this.httpClient.get<PokemonData[]>(`${environment.apiUrl}${id}/`);
  }
}
