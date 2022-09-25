import {Observable} from 'rxjs';
import {UrlTree} from '@angular/router';

export interface CanComponentActivateInterface {
  canActivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}
