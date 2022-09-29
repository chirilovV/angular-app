import {Injectable} from '@angular/core';
import {GenderEnum} from '../../core/Enums/gender.enum';
import {User} from '../models/user.interface';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LocalUsersService {


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

  constructor() {
  };


  getLocalUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): Observable<any> {
    let user = this.users.find(item => {
      return item.id === id;
    });

    return of(user).pipe(delay(1000));
  }
}
