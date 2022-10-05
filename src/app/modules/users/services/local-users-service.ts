import {Injectable} from '@angular/core';
import {GenderEnum} from '../../core/Enums/gender.enum';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {NewUser} from '../models/new-user.interface';

@Injectable({
  providedIn: 'root'
})

export class LocalUsersService {


  private users: NewUser[] = [
    {
      id: 'a2',
      personalInfo: {
        firstName: 'Ana',
        lastName: 'Maria',
        age: 27,
        imageUrl: 'assets/img/avatar2.png',
        gender: GenderEnum.Female,
        email: 'some@gmail.com'
      },
      companyInfo: {
        department: 'Data Management',
        company: 'Coherent Solutions',
        salary: 1000,
        currency: 'usd',
      },
      addresses: [
        {
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
    {
      id: 'a5',
      personalInfo: {
        firstName: 'George',
        lastName: 'Bush',
        age: 38,
        imageUrl: 'assets/img/avatar5.png',
        gender: GenderEnum.Male,
        email: 'some@mail.com',
      },
      companyInfo: {
        department: 'Data Management',
        company: 'Coherent Solutions',
        salary: 1000,
        currency: 'USD',
      },
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

  getUserById(id: string): Observable<NewUser | undefined> {
    let user: NewUser | undefined = this.users.find((item: NewUser) => {
      return item.id === id;
    });

    return of(user).pipe(delay(1000));
  }
}
