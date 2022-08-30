import {Component, Input} from '@angular/core';
import {Car} from "../../models/car.interface";

@Component({
  selector: 'car-favorite-list',
  templateUrl: './car-favorite-list.component.html',
  styleUrls: ['./car-favorite-list.component.scss']
})
export class CarFavoriteListComponent {
  @Input() favorites!: Car[];

  constructor() {
  }
}
