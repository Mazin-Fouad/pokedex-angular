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
  count: number = 12;

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    this.fetchPokemons(1, 12);
    console.log(this.pokemons);
  }

  fetchPokemons(startIndex: number, count: number) {
    for (let i = startIndex; i < startIndex + count; i++) {
      this.pokemonApiService.getPokemons(i).subscribe((pokemon) => {
        this.pokemons.push(pokemon);
      });
    }
    this.count += count;
  }

  loadMorePokemons() {
    let lastPokemonIndex = this.pokemons.length;
    this.fetchPokemons(lastPokemonIndex + 1, 4);
    this.count += 4;
  }

  trackById(index: number, pokemon: any): number {
    return pokemon.id;
  }

  getPokemonType(pokemon: any) {
    switch (pokemon.types[0].type.name) {
      case 'normal':
        return 'normal';
      case 'fire':
        return 'fire';
      case 'water':
        return 'water';
      case 'electric':
        return 'electric';
      case 'grass':
        return 'grass';
      case 'ice':
        return 'ice';
      case 'fighting':
        return 'fighting';
      case 'poison':
        return 'poison';
      case 'ground':
        return 'ground';
      case 'flying':
        return 'flying';
      case 'psychic':
        return 'psychic';
      case 'bug':
        return 'bug';
      case 'rock':
        return 'rock';
      case 'ghost':
        return 'ghost';
      case 'dragon':
        return 'dragon';
      case 'dark':
        return 'dark';
      case 'steel':
        return 'steel';
      case 'fairy':
        return 'fairy';
      default:
        return '';
    }
  }
}
