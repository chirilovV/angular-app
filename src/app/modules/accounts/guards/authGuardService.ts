import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, take} from 'rxjs';
import {Injectable} from '@angular/core';
import {NotificationService} from '../../shared/services/notification.service';
import {AuthService} from '../services/auth.service';
import {AppRouteEnum} from '../../core/Enums/appRouteEnum';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isUserAuth = false;

  constructor(
    private router: Router,
    private notify: NotificationService,
    private authService: AuthService
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.authorise().pipe(take(1)).subscribe(response => {
      this.isUserAuth = response;
    });


    console.log('fff === ', this.isUserAuth);
    if(!this.isUserAuth) {
      this.notify.warning('Pleas go to Login or  Register !!!!');
      this.router.navigate([AppRouteEnum.Register]);
      return false;
    }

    return true;
  }
}
