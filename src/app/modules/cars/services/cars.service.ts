import {Injectable, OnDestroy} from '@angular/core';
import {Car} from '../models/car.interface';
import {FavoriteService} from '../../shared/services/favorite.service';
import {EntitiesEnum} from '../../core/Enums/entities.enum';
import {Observable, of, Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService implements OnDestroy {
  subscription: Subscription | undefined;

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
      color: 'green',
      imageUrl: 'assets/img/auto3.png',
      number: 123456,
      releaseYear: 2021
    },
    {
      id: 'a4',
      name: 'Audi',
      color: 'green',
      imageUrl: 'assets/img/auto4.png',
      number: 123456,
      releaseYear: 2021
    },
    {
      id: 'a5',
      name: 'Tesla',
      color: 'green',
      imageUrl: 'assets/img/auto6.png',
      number: 123456,
      releaseYear: 2021
    },
  ];

  constructor(private favoritesService: FavoriteService) {
  }

  getFavorites(): Car[] {
    let favoriteCars: Car[] = [];

    this.subscription = this.favoritesService.getItems(EntitiesEnum.car).subscribe(value => {
      favoriteCars = this.cars.filter(
        item => value.includes(item.id)).map(
        cars => ({...cars, isFavorite: true}
        ));
    });

    return favoriteCars;
  };

  getCars(): Observable<Car[]> {
    return of(this.cars).pipe(delay(500));
  };

  toggleFavorites(id: string): void {
    this.favoritesService.toggleFavorites(EntitiesEnum.car, id);
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  };
}

