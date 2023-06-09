import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemon-data';
import { PokemonApiService } from 'src/services/pokemon-api.service';
import { Observable, forkJoin, map } from 'rxjs';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-cards-gallery',
  templateUrl: './cards-gallery.component.html',
  styleUrls: ['./cards-gallery.component.scss'],
})
export class CardsGalleryComponent implements OnInit {
  pokemons: any[] = [];
  filteredPokemons: any[] = [];
  count: number = 52;
  totalPokemonCount: number = 0;
  @Input() searchQuery: string | undefined = '';

  constructor(
    private pokemonApiService: PokemonApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchPokemons(1, 52);
    this.filteredPokemons = this.pokemons.slice(0, this.count);
  }

  ngOnChanges() {
    if (this.searchQuery) {
      this.filteredPokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchQuery?.toLowerCase())
      );
    } else {
      this.filteredPokemons = this.pokemons.slice(0, this.count);
    }
  }

  fetchPokemons(startIndex: number, count: number) {
    const requests = [];

    for (let i = startIndex; i < startIndex + count; i++) {
      requests.push(this.pokemonApiService.getPokemons(i));
    }

    forkJoin(requests).subscribe((response) => {
      this.pokemons = this.pokemons.concat(response);
      console.log(this.pokemons);
      this.filteredPokemons = this.pokemons.slice(0, this.count);
    });
  }

  loadMorePokemons() {
    let lastPokemonIndex = this.pokemons.length;
    this.fetchPokemons(lastPokemonIndex + 1, 4);
    this.count += 4;
    this.filteredPokemons = this.pokemons.slice(0, this.count);
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

  openDialog(pokemon: any): void {
    const dialogRef = this.dialog.open(PokemonDetailsComponent, {
      data: pokemon,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
