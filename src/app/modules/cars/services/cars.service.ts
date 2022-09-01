import {Injectable} from '@angular/core';
import {Car} from "../models/car.interface";
import {FavoriteService} from "../../shared/services/favorite.service";
import {EntitiesEnum} from "../../core/Enums/entities.enum";

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
    {
      id: 'a3',
      name: 'Mercedes',
      color: 'yellow',
      imageUrl: 'assets/img/auto3.png',
      number: 123456,
      releaseYear: 2019
    },
    {
      id: 'a4',
      name: 'Audi',
      color: 'red',
      imageUrl: 'assets/img/auto4.png',
      number: 123456,
      releaseYear: 2020
    },
    {
      id: 'a5',
      name: 'Tesla',
      color: 'white',
      imageUrl: 'assets/img/auto6.png',
      number: 123456,
      releaseYear: 2022,
    },
  ];

  constructor(private favoritesService: FavoriteService) {
  };

  getFavorites(): Car[] {
    let favorite = this.favoritesService.getItems(EntitiesEnum.car);
    let cars = this.getCars().filter(item => favorite.includes(item.id));
    cars.forEach(item => item.isFavorite = true);

    return cars;
  };

  getCars(): Car[] {
    return this.cars;
  };

  toggleFavorites(id: string): void {
    this.favoritesService.toggleFavorites(EntitiesEnum.car, id);
  }
}

