import {Injectable} from '@angular/core';
import {GenderEnum} from "../../core/Enums/gender.enum";
import {EntitiesEnum} from "../../core/Enums/entities.enum";
import {FavoriteService} from "../../shared/services/favorite.service";
import {User} from "../models/user.interface";
import {Observable, of} from "rxjs";

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
      email: 'some@gmail.com'
    },
    {
      id: 'a5',
      firstName: 'George',
      lastName: 'Bush',
      age:38,
      imageUrl: 'assets/img/avatar5.png',
      department: 'Data Management',
      company: 'Coherent Solutions',
      gender: GenderEnum.male,
      email: 'some@mail.com'
    },
  ];

  constructor(private favoritesService: FavoriteService) {
  };

  getUsers(): Observable<User[]> {
    return of(this.users)
  }

  getFavorites(): User[] {
    let favoriteUsers: User[] = []
    let users: User[] = [];

    this.getUsers().subscribe(value => {
      users = value
    })

    this.favoritesService.getItems(EntitiesEnum.user).subscribe(value => {
      favoriteUsers = users.filter(
        item => value.includes(item.id)).map(
        user => ({...user, isFavorite: true}
        ));
    });

    return favoriteUsers;
  }

  toggleFavorites(id: string): void {
    this.favoritesService.toggleFavorites(EntitiesEnum.user, id);
  }

  addNewUser(user:User): void {
    this.users.push(user);
  }

  findUserByEmail(email: string): Observable<boolean> {
    let result = !!this.users.find(user => user.email === email)
    return of(result);
  }
}

