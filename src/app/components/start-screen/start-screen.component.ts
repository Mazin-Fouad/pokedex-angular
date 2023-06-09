import { Component } from '@angular/core';
import { AudioService } from 'src/services/audio.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
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
