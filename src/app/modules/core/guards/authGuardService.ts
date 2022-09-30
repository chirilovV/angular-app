import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {NotificationService} from '../../shared/services/notification.service';
import {AuthorisationService} from '../../authentication/services/authorisation.service';
import {AppRouteEnum} from '../Enums/appRouteEnum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private notify: NotificationService,
    private authService: AuthorisationService
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLogged: boolean = this.authService.isUserAuthorised();
    if(!isLogged) {
      this.router.navigate([AppRouteEnum.Register]);
    }

    return isLogged;
  }
}
