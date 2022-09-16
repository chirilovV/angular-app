import {Injectable} from '@angular/core';
import {GenderEnum} from '../../core/Enums/gender.enum';
import {EntitiesEnum} from '../../core/Enums/entities.enum';
import {FavoriteService} from '../../shared/services/favorite.service';
import {User} from '../models/user.interface';
import {Observable, of} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Address} from '../models/address.interface';
import {HttpService} from '../../core/services/http.service';
import {HttpMethods} from '../../core/Enums/http-methods.enum';
import {UserResponse} from '../models/UserResponse.interface';
import {PageOptions} from '../../shared/models/pageOptions';

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

  private apiURL = 'https://api.github.com/search';
  private defaultAvatarPath = ' assets/img/defaultUserAvatar.png';

  constructor (
    private favoritesService: FavoriteService,
    private httpService: HttpService
  ) {
  };

  getUsers (pageOption: PageOptions,): Observable<UserResponse> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Get,
      url: this.apiURL + `/users?per_page=${pageOption.pageSize}&q=${pageOption.pageIndex}`,
      options: {}
    });
  }

  getUserById (id: string): Observable<User | undefined> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Get,
      url: this.apiURL + `/user?q=${id}+in:id`,
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
    let newUser: User = {
      age: 0,
      company: '',
      department: '',
      email: '',
      firstName: '',
      gender: GenderEnum.NotSpecified,
      id: '',
      imageUrl: '',
      lastName: ''
    };

    this.addUserPersonalInformation (newUser, userForm);
    this.addAddresses (newUser, userForm);

    this.httpService.dispatchData ({
      method: HttpMethods.Put,
      url: this.apiURL + `/addNewUser`,
      options: {body: userForm}
    });
  }

  search (keyword: string): Observable<any> {
    return this.httpService.dispatchData ({
      method: HttpMethods.Get,
      url: this.apiURL + `/users?q=${keyword}+in:name`,
      options: {}
    });
  }

  findUserByEmail (email: string): Observable<any> {
    let favoriteUsers: User[] = [];

//    this.favoritesService.getItems(EntitiesEnum.user).subscribe(value => {
//      favoriteUsers = this.users.filter(
//        item => value.includes(item.id)).map(
//        user => ({...user, isFavorite: true}
//        ));
//    });

    return of (favoriteUsers);
  }

  toggleFavorites (id: string): void {
    this.favoritesService.toggleFavorites (EntitiesEnum.user, id);
  }


  getFavorites (): Observable<User[]> {
    let favoriteUsers: User[] = [];

    this.favoritesService.getItems (EntitiesEnum.user).subscribe (value => {
      favoriteUsers = this.users.filter (
        item => value.includes (item.id)).map (
        user => (
          {...user, isFavorite: true}
        ));
    });

    return of (favoriteUsers);
  }


  // ////////////////////////////  ///////////////////////////
  addUserPersonalInformation (user: User, userForm: any) {
    let userData = userForm.controls.user.controls;

    user.age = userData.age.value;
    user.company = userData.company.value;
    user.department = userData.department.value;
    user.email = userData.email.value;
    user.firstName = userData.firstName.value;
    user.gender = userData.gender.value;
    user.imageUrl = user.imageUrl ? user.imageUrl : this.defaultAvatarPath;
    user.lastName = userData.lastName.value;
    user.id = user.id ? user.id : Math.random ().toString (16).slice (2);
  }

  addAddresses (user: User, userForm: any): void {
    let addressesData: FormGroup[] = userForm.controls.addresses.controls;
    let addresses: Address[] = [];

    if (0 !== addressesData.length) {
      addressesData.forEach ((address) => {
          addresses.push ({
            addressLine: address.controls['addressLine'].value,
            city: address.controls['city'].value,
            zip: address.controls['zip'].value,
          });
        }
      );
    }

    user.addresses = addresses;
  }
}
