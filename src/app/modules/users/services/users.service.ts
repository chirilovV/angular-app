import {Injectable} from '@angular/core';
import {GenderEnum} from "../../core/Enums/gender.enum";
import {EntitiesEnum} from "../../core/Enums/entities.enum";
import {FavoriteService} from "../../shared/services/favorite.service";
import {User} from "../models/user.interface";
import {Observable, of} from "rxjs";
import {delay} from 'rxjs/operators';
import { FormGroup} from "@angular/forms";
import {Address} from "../models/address.interface";

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
      gender: GenderEnum.Female,
      email: 'some@gmail.com'
    },
    {
      id: 'a5',
      firstName: 'George',
      lastName: 'Bush',
      age: 38,
      imageUrl: 'assets/img/avatar5.png',
      department: 'Data Management',
      company: 'Coherent Solutions',
      gender: GenderEnum.Male,
      email: 'some@mail.com'
    },
  ];

  private defaultAvatarPath = ' assets/img/defaultUserAvatar.png';

  constructor(private favoritesService: FavoriteService) {
  };

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(500));
  }

  findUserByName(keyword: string): Observable<User[]> {
    let users = this.users.filter(
      user => (user.firstName.toLowerCase().includes(keyword) || user.lastName.toLowerCase().includes(keyword))
    )

    return of(users).pipe(delay(1000));
  }

  getFavorites(): Observable<User[]> {
    let favoriteUsers: User[] = [];

    this.favoritesService.getItems(EntitiesEnum.user).subscribe(value => {
      favoriteUsers = this.users.filter(
        item => value.includes(item.id)).map(
        user => ({...user, isFavorite: true}
        ));
    });

    return of(favoriteUsers);
  }

  toggleFavorites(id: string): void {
    this.favoritesService.toggleFavorites(EntitiesEnum.user, id);
  }

  addNewUser(user: any): void {
    let userData = user.controls.user.controls;
    let addressesData:FormGroup[] = user.controls.addresses.controls;
    let addresses:Address[]=[];

    let newUser: User = {
      age: userData.age.value,
      company: userData.company.value,
      department: userData.department.value,
      email: userData.email.value,
      firstName: userData.firstName.value,
      gender: userData.gender.value,
      id: Math.random().toString(16).slice(2),
      imageUrl: this.defaultAvatarPath,
      lastName: userData.lastName.value,
    };

    if (addressesData.length !== 0) {
      addressesData.forEach((address) => {
        addresses.push({
            addressLine: address.controls['addressLine'].value,
            city: address.controls['city'].value,
            zip: address.controls['zip'].value,
          })
        }
      )
    }
    if(addresses.length>0) newUser.addresses=addresses

    this.users.push(newUser);
  }

  findUserByEmail(email: string): Observable<boolean> {
    let result = !!this.users.find(user => user.email === email)
    return of(result);
  }
}

