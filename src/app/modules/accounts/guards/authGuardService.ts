import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {NotificationService} from '../../shared/services/notification.service';
import {AuthService} from '../services/auth.service';
import {AppRouteEnum} from '../../core/Enums/appRouteEnum';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private notify: NotificationService,
    private authService: AuthService
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.authorise()
    .subscribe(isUserAuth => {
      if(!isUserAuth) {
        this.notify.warning('Pleas go to Login or Register !!!!');
        this.router.navigate([AppRouteEnum.Register]);
      }
    });

    return true;
  }
}
