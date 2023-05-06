import { Component } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
  audio: HTMLAudioElement = new Audio('assets/sounds/intro.mp3');
  isClicked: boolean = false;

  playMusic(): void {
    this.audio.play();
    this.isClicked = true;
  }

  stopMusic(): void {
    this.audio.pause();
    this.isClicked = false;
  }
}
