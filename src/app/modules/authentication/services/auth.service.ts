import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  auth_token: string = 'asasa21212';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

  constructor() {

  }

  authorise(): Observable<boolean> {
    return of((null !== sessionStorage.getItem('name')));
  }

  logOut(): Observable<string> {
    sessionStorage.removeItem('name');

    return of('Successfully logout').pipe(delay(2000));
  }

}