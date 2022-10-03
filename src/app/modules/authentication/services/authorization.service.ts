import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  constructor() {

  }

  authorise(userName: string): void {
    sessionStorage.setItem('isUserLoggedIn', 'true');
    sessionStorage.setItem('userName', userName);
  }

  logOut(): void {
    sessionStorage.removeItem('isUserLoggedIn');
    sessionStorage.removeItem('userName');
  }

  isUserAuthorised() {
    let isAuth = sessionStorage.getItem('isUserLoggedIn');
    return (null !== isAuth && 'true' === isAuth);
  }
}
