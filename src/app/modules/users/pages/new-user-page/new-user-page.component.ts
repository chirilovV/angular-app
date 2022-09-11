import {Component} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {AppRouteEnum} from "../../../core/Enums/appRouteEnum";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent {
  unSaved: boolean = true;

  constructor(private userService: UsersService, private router: Router) {
  }

  saveUser(user: any) {
    this.userService.addNewUser(user);
    this.router.navigate([AppRouteEnum.Users]);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.unSaved) {
      const result = window.confirm('You have some unsaved changes and it will be lost. Do you want to leave the page?');
      return of(result);
    }
    return true;
  }
}
