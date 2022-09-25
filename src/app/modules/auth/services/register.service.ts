import {Injectable} from '@angular/core';
import {RegisteredUser} from '../models/registred-user.interface';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Response} from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  registeredUsers: RegisteredUser[] = [
    {
      userName: 'Ion',
      password: '11',
      confirm: '11'
    }
  ];
  response: Response = {
    message: 'Successfully logged.',
    status: 'ok'
  };

  addUser(user: RegisteredUser): Observable<string> {
    this.registeredUsers.push(user);
    return of('Successfully saved.').pipe(delay(1000));
  }

  findUser(userName: string, password: string): Observable<Response> {
    let item: RegisteredUser | undefined = this.registeredUsers.find((item: RegisteredUser) => {
      return item.userName === userName && item.password === password;
    });

    if(item === undefined) {
      this.response = {
        message: 'Not found.',
        status: 'bad'
      };
    }

    return of(this.response);
  }

  logOut(): void {
    sessionStorage.removeItem('name');
  }
}
