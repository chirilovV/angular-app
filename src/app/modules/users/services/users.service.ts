import {Injectable} from '@angular/core';
import {GenderEnum} from "../../core/Enums/gender.enum";
import {EntitiesEnum} from "../../core/Enums/entities.enum";
import {FavoriteService} from "../../shared/services/favorite.service";
import {User} from "../models/user.interface";
import {Observable, of} from "rxjs";
import {delay} from 'rxjs/operators';
import {FormGroup} from "@angular/forms";
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
      email: 'some@mail.com',
      addresses: [{
        addressLine: 'czxczcz',
      }]
    },
  ];

  private defaultAvatarPath = ' assets/img/defaultUserAvatar.png';

  constructor(private favoritesService: FavoriteService) {
  };

  addNewUser(userForm: any): void {
    let newUser: User = {
      age: 0,
      company: "",
      department: "",
      email: "",
      firstName: "",
      gender: GenderEnum.NotSpecified,
      id: "",
      imageUrl: "",
      lastName: ""
    }

    this.addUserPersonalInformation(newUser, userForm);
    this.addAddresses(newUser, userForm);

    this.users.push(newUser);
  }

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(500));
  }

  getUserById(id: string): Observable<User | undefined> {
    return of(this.users.find(user => user.id === id));
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

  findUserByName(keyword: string): Observable<User[]> {
    let users = this.users.filter(
      user => (user.firstName.toLowerCase().includes(keyword) || user.lastName.toLowerCase().includes(keyword))
    )

    return of(users).pipe(delay(1000));
  }

  findUserByEmail(email: string): Observable<boolean> {
    return of(!!this.users.find(user => user.email === email));
  }

  updateUser(id: string, userForm: any): Observable<string> {
    this.users.map((user: User) => {
      if (user.id === id) {
        this.addUserPersonalInformation(user, userForm);
        this.addAddresses(user, userForm);
      }
    })


    return of('User successfully was updated.')
  }

  toggleFavorites(id: string): void {
    this.favoritesService.toggleFavorites(EntitiesEnum.user, id);
  }


  // ////////////////////////////  ///////////////////////////
  addUserPersonalInformation(user: User, userForm: any) {
    let userData = userForm.controls.user.controls;

    user.age = userData.age.value;
    user.company = userData.company.value;
    user.department = userData.department.value;
    user.email = userData.email.value;
    user.firstName = userData.firstName.value;
    user.gender = userData.gender.value;
    user.imageUrl = user.imageUrl ? user.imageUrl : this.defaultAvatarPath;
    user.lastName = userData.lastName.value;
    user.id = user.id ? user.id : Math.random().toString(16).slice(2);
  }

  addAddresses(user: User, userForm: any): void {
    let addressesData: FormGroup[] = userForm.controls.addresses.controls;
    let addresses: Address[] = [];

    if (addressesData.length !== 0) {
      addressesData.forEach((address) => {
          addresses.push({
            addressLine: address.controls['addressLine'].value,
            city: address.controls['city'].value,
            zip: address.controls['zip'].value,
          })
        }
      )
      user.addresses = addresses
    }
  }
}
