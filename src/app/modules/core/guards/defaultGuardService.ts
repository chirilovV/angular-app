import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {NotificationService} from '../../shared/services/notification.service';
import {AuthorizationService} from '../../authentication/services/authorization.service';
import {AppRouteEnum} from '../Enums/appRouteEnum';

@Injectable({
  providedIn: 'root'
})
export class DefaultGuardService implements CanActivate {
  constructor(
    private router: Router,
    private notify: NotificationService,
    private authService: AuthorizationService
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLogged: boolean = this.authService.isUserAuthorised();

    if(isLogged) {
      this.router.navigate([AppRouteEnum.Home]);
    }

    return !isLogged;
  }
}
