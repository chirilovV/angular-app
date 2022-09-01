import {Component} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../models/car.interface";

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent {

  constructor(private carsService: CarsService) {
  }

  get cars(): Car[] {
    return this.carsService.getCars();
  }

  get favorites(): Car[] {
    return this.carsService.getFavorites();
  }

  toggleFavorites(car: Car) {
    car.isFavorite = !car.isFavorite;
    this.carsService.toggleFavorites(car.id);
  }
}
