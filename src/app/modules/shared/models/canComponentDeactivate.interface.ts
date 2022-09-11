import {Observable} from "rxjs";
import {UrlTree} from "@angular/router";

export interface CanComponentDeactivateInterface {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}
