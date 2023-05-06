import { Component } from '@angular/core';
import { AudioService } from 'src/services/audio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isClicked: boolean = false;
  constructor(private audioService: AudioService) {}

  playMusic(): void {
    this.audioService.playMusic();
    this.isClicked = true;
  }

  stopMusic(): void {
    this.audioService.stopMusic();
    this.isClicked = false;
  }
}
