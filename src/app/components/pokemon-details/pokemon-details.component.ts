import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvolutionService } from 'src/services/evolution.service';
import { PokemonApiService } from 'src/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  typeMapping = [
    { type: 'bug', path: 'assets/imgs/type_icons/bug.svg' },
    { type: 'dark', path: 'assets/imgs/type_icons/dark.svg' },
    { type: 'dargon', path: 'assets/imgs/type_icons/dragon.svg' },
    { type: 'electric', path: 'assets/imgs/type_icons/electric.svg' },
    { type: 'fairy', path: 'assets/imgs/type_icons/fairy.svg' },
    { type: 'fighting', path: 'assets/imgs/type_icons/fighting.svg' },
    { type: 'fire', path: 'assets/imgs/type_icons/fire.svg' },
    { type: 'flying', path: 'assets/imgs/type_icons/flying.svg' },
    { type: 'ghost', path: 'assets/imgs/type_icons/ghost.svg' },
    { type: 'grass', path: 'assets/imgs/type_icons/grass.svg' },
    { type: 'ground', path: 'assets/imgs/type_icons/ground.svg' },
    { type: 'ice', path: 'assets/imgs/type_icons/ice.svg' },
    { type: 'normal', path: 'assets/imgs/type_icons/normal.svg' },
    { type: 'poison', path: 'assets/imgs/type_icons/poison.svg' },
    { type: 'psychic', path: 'assets/imgs/type_icons/psychic.svg' },
    { type: 'rock', path: 'assets/imgs/type_icons/rock.svg' },
    { type: 'steel', path: 'assets/imgs/type_icons/steel.svg' },
    { type: 'water', path: 'assets/imgs/type_icons/water.svg' },
  ];

  pokemon: any;
  evolution: any;
  isOpen: boolean = false;
  testStory: any;
  encounterMethods: any;
  currentPokemonIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private evolutionService: EvolutionService,
    private pokemonsService: PokemonApiService
  ) {
    this.pokemon = data;
  }

  ngOnInit() {
    this.getPokemonDetails(this.pokemon.id);
    this.isOpen = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
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

  ngOnDestroy() {
    this.isOpen = false;
  }

  getDescription(pokemonId: number) {
    const id = this.data.id;
    this.evolutionService.getEncounterMethod(pokemonId).subscribe((data) => {
      this.encounterMethods = data;
      console.log(this.encounterMethods);
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.showNextPokemon();
    } else if (event.key === 'ArrowLeft') {
      this.showPreviousPokemon();
    }
  }

  showNextPokemon() {
    const nextPokemonId = this.currentPokemonIndex + 1;
    this.getPokemonDetails(nextPokemonId);
  }

  showPreviousPokemon() {
    const previousPokemonId = this.currentPokemonIndex - 1;
    this.getPokemonDetails(previousPokemonId);
  }

  getPokemonDetails(pokemonId: number) {
    this.pokemonsService.getPokemons(pokemonId).subscribe((data) => {
      this.pokemon = data;
      this.getDescription(pokemonId);
      this.currentPokemonIndex = pokemonId;
    });
  }
}
