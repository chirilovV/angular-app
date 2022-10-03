import {Component, OnDestroy, OnInit} from '@angular/core';
import {Car} from '../../models/car.interface';
import {CarsService} from '../../services/cars.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit, OnDestroy {
  cars!: Car[];
  subscription: Subscription | undefined;

  constructor(private carsService: CarsService) {
  }

  get favorites(): Car[] {
    return this.carsService.getFavorites();
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.subscription = this.carsService.getCars().subscribe(
      items => this.cars = items
    );
  }

  toggleFavorites(car: Car): void {
    car.isFavorite = !car.isFavorite;
    this.carsService.toggleFavorites(car.id);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
