import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
  @Input() pokemon: any;

  ngOnInit() {}

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
