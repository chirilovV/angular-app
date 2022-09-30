import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorisationService {

  constructor() {

  }

  authorise(): void {
    sessionStorage.setItem('isUserLoggedIn', 'true');
  }

  logOut(): void {
    sessionStorage.removeItem('isUserLoggedIn');
    sessionStorage.removeItem('name');
  }

  isUserAuthorised() {
    let isAuth = sessionStorage.getItem('isUserLoggedIn');
    return (null !== isAuth && 'true' === isAuth);
  }
}
