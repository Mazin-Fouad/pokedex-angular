import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss'],
})
export class SearchSectionComponent {
  childValue: string = '';
  @Output() valueChanged = new EventEmitter<string>();

  sendValue() {
    this.valueChanged.emit(this.childValue);
  }
}
