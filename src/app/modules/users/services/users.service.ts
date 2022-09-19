import {Injectable} from '@angular/core';
import {GenderEnum} from '../../core/Enums/gender.enum';
import {FavoriteService} from '../../shared/services/favorite.service';
import {User} from '../models/user.interface';
import {forkJoin, Observable, of, switchMap, tap} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {HttpMethods} from '../../core/Enums/http-methods.enum';
import {UserResponse} from '../models/UserResponse.interface';
import {PageOptions} from '../../shared/models/pageOptions';
import {delay} from 'rxjs/operators';
import {UserDataPreparationService} from './user-data-preparation.service';

@Injectable ({
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
      },
        {
          addressLine: 'czxczcz',
          city: 'London',
          zip: 'MD-2021'
        },
        {
          addressLine: 'czxczcz',
          city: 'Chisinau',
          zip: 'MD-2021'
        }]
    },
  ];

  private apiURL = 'https://api.github.com';
  private randomNumber = Math.floor (Math.random () * (6000 - 1000 + 1)) + 1000;

  constructor (
    private userData: UserDataPreparationService,
    private favoritesService: FavoriteService,
    private httpService: HttpService
  ) {
  };

  getUsers (pageOption: PageOptions,): Observable<UserResponse> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Get,
      url: this.apiURL + `/search/users?per_page=${pageOption.pageSize}&q=${pageOption.pageIndex}`,
      options: {}
    });
  }

  getUser (login: string): Observable<User | undefined> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Get,
      url: this.apiURL + `/users/${login}`,
      options: {}
    });
  }

  updateUser (id: string, userForm: any): Observable<string> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Put,
      url: this.apiURL + `/user?q=${id}+in:id`,
      options: {body: userForm}
    });
  }

  addNewUser (userForm: any): void {
    let newUser = this.userData.createNewUser (userForm);

    this.httpService.dispatchData ({
      method: HttpMethods.Put,
      url: this.apiURL + `/addNewUser`,
      options: {body: newUser}
    });
  }

  search (keyword: string): Observable<any> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Get,
      url: this.apiURL + `/search/users?q=${keyword}+in:name`,
      options: {}
    });
  }

  findUserByEmail (email: string): Observable<any> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Get,
      url: this.apiURL + `/search/users?q=${email}+in:email`,
      options: {}
    });
  }

  downloadExcel (id: any): Observable<any> {
    return forkJoin (
      of (`User with id = ${id} START to download EXCEL.`)
        .pipe (
          tap (() => console.log (`User with id = ${id} START to save`)),
          delay (this.randomNumber)
        )
    );
  }

  saveUser (id: any): Observable<any> {
    return of ('').pipe (
      tap (() => console.log (`User with id = ${id} START to save`)),
      switchMap (() => {
        return of (`User with id = ${id} END to save.`)
          .pipe (delay (this.randomNumber));
      }));
  }

  getLocalUsers (): User[] {
    return this.users;
  }
}
