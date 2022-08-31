import {Injectable} from '@angular/core';
import {GenderEnum} from "../../core/Enums/gender.enum";
import {EntitiesEnum} from "../../core/Enums/entities.enum";
import {FavoriteService} from "../../shared/services/favorite.service";
import {User} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      id: 'a2',
      firstName: 'Ana',
      lastName: 'Maria',
      age: 27,
      imageUrl: 'assets/img/avatar2.png',
      department: 'Data Management',
      company: 'Coherent Solutions',
      gender: GenderEnum.female,
      email: 'some@mail.com'
    },
    {
      id: 'a3',
      firstName: 'George',
      lastName: 'Bush',
      age:38,
      imageUrl: 'assets/img/avatar3.png',
      department: 'Data Management',
      company: 'Coherent Solutions',
      gender: GenderEnum.male,
      email: 'some@mail.com'
    },
    {
      id: 'a4',
      firstName: 'Ana',
      lastName: 'Maria',
      age: 45,
      imageUrl: 'assets/img/avatar4.png',
      department: 'Data Entry',
      company: 'DAAC Hermes',
      gender: GenderEnum.female,
      email: 'some@mail.com'
    }
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

  addNewUser(user:User){
    this.users.push(user);
  }
}

