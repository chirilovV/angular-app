import {Injectable} from '@angular/core';
import {Car} from "../models/car.interface";
import {FavoriteService} from "../../shared/services/favorite.service";
import {EntitiesEnum} from "../../core/Enums/entities.enum";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [
    {
      id: 'a1',
      name: 'Hyundai',
      color: 'black',
      imageUrl: 'assets/img/auto1.png',
      number: 123456,
      releaseYear: 2020
    },
    {
      id: 'a2',
      name: 'Porsche',
      color: 'green',
      imageUrl: 'assets/img/auto2.png',
      number: 123456,
      releaseYear: 2021
    },
  ];

  constructor(private favoritesService: FavoriteService) {
  };

  getFavorites(): Car[] {
    let favoriteCars: Car[] = []
    let cars: Car[] = [];

    this.getCars().subscribe(value => {
      cars = value
    })

    this.favoritesService.getItems(EntitiesEnum.car).subscribe(value => {
      favoriteCars = cars.filter(
        item => value.includes(item.id)).map(
        cars => ({...cars, isFavorite: true}
        ));
    });

    return favoriteCars;
  };

  getCars(): Observable<Car[]> {
    return of(this.cars);
  };

  toggleFavorites(id: string): void {
    this.favoritesService.toggleFavorites(EntitiesEnum.car, id);
  }
}

