import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {Car} from "../../models/car.interface";

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit {
  cars!: Car[];

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.getCars();
  }


  getCars(): void {
    this.carsService.getCars().subscribe(
      items => this.cars = items
    );
  }

  get favorites(): Car[] {
    return this.carsService.getFavorites();
  }

  toggleFavorites(car: Car): void {
    car.isFavorite = !car.isFavorite;
    this.carsService.toggleFavorites(car.id);
  }

}
