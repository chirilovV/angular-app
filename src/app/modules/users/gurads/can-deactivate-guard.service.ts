import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {CanComponentDeactivateInterface} from '../../shared/models/canComponentDeactivate.interface';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivateInterface> {

  constructor() {
  }

  canDeactivate(
    component: CanComponentDeactivateInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//    window.confirm ('There are unsaved changes! Are you sure?');
    return component.canDeactivate();
  }
}
