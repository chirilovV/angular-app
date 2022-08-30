import {Injectable} from '@angular/core';
import {User} from "../models/user.interface";
import {GenderEnum} from "../../core/Enums/gender.enum";
import {EntitiesEnum} from "../../core/Enums/entities.enum";
import {FavoriteService} from "../../core/services/favorite.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      id: 'a2',
      name: 'Ana Maria',
      age: 27,
      imageUrl: 'assets/img/avatar2.png',
      department: '',
      company: 'Coherent Solutions',
      gender: GenderEnum.female
    },
    {
      id: 'a3',
      name: 'Ion Popes',
      age: 15,
      imageUrl: 'assets/img/avatar3.png',
      department: '',
      company: 'Coherent Solutions',
      gender: GenderEnum.male
    },
    {
      id: 'a4',
      name: 'Gina Bush',
      age: 37,
      imageUrl: 'assets/img/avatar4.png',
      department: '',
      company: 'Coherent Solutions',
      gender: GenderEnum.female
    },
    {
      id: 'a5',
      name: 'George Duct',
      age: 67,
      imageUrl: 'assets/img/avatar5.png',
      department: '',
      company: 'Coherent Solutions',
      gender: GenderEnum.notSpecified
    },
  ];

  constructor(private favoritesService: FavoriteService) {
  };

  getUsers(): User[] {
    return this.users;
  };

  getFavorites(): User[] {
    let favorite = this.favoritesService.getItems(EntitiesEnum.user);

    let cars = this.getUsers().filter(item => favorite.includes(item.id));
    cars.forEach(item => item.isFavorite = true);

    return cars;
  }

  toggleFavorites(id: string): void {
    this.favoritesService.toggleFavorites(EntitiesEnum.user, id);
  }
}

