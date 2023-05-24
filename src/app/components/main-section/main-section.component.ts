import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent {
  parentValue: string = '';

  getValue(value: string) {
    this.parentValue = value;
  }
}
