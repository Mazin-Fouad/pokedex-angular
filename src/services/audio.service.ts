import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement = new Audio('assets/sounds/intro.mp3');
  private isClicked: boolean = false;

  playMusic(): void {
    this.audio.play();
    this.isClicked = true;
  }

  stopMusic(): void {
    this.audio.pause();
    this.isClicked = false;
  }
}
