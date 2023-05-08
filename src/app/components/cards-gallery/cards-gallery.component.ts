import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemon-data';
import { PokemonApiService } from 'src/services/pokemon-api.service';

@Component({
  selector: 'app-cards-gallery',
  templateUrl: './cards-gallery.component.html',
  styleUrls: ['./cards-gallery.component.scss'],
})
export class CardsGalleryComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    this.fetchPokemons();
    console.log(this.pokemons);
  }

  fetchPokemons() {
    for (let i = 1; i <= 12; i++) {
      this.pokemonApiService.getPokemons(i).subscribe((pokemon) => {
        this.pokemons.push(pokemon);
      });
    }
  }
}
