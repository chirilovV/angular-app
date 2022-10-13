import {CanLoad, Route, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {NotificationService} from '../../shared/services/notification.service';
import {AuthorizationService} from '../../authentication/services/authorization.service';
import {AppRouteEnum} from '../Enums/appRouteEnum';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuardService implements CanLoad {
  constructor(
    private router: Router,
    private notify: NotificationService,
    private authService: AuthorizationService
  ) {
  }

  public canLoad(router: Route): boolean {
    const url: string | undefined = router.path;
    console.log('Url:' + url);
    if(this.authService.isUserAuthorised()) {
      return true;
    }

    this.router.navigate([AppRouteEnum.Register]);
    console.log('here');
    return false;
  }

}
