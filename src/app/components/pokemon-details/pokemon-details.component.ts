import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvolutionService } from 'src/services/evolution.service';

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

  constructor(
    public dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private evolutionService: EvolutionService
  ) {
    this.pokemon = data;
  }

  ngOnInit() {
    this.fetchEvolutionChain();
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

  fetchEvolutionChain() {
    const id = 1; // Replace with the desired ID
    this.evolutionService.getEvolutionChain(id).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnDestroy() {
    this.isOpen = false;
  }
}
