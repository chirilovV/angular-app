import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from "../../models/car.interface";

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
  @Input() cars!: Car[];
  @Output() addInFavoritesList = new EventEmitter();

  constructor() {
  }
}
