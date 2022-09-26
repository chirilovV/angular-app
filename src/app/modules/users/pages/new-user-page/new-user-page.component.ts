import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';
import {CanComponentDeactivateInterface} from '../../../shared/models/canComponentDeactivate.interface';
import {UsersApiService} from '../../services/users-api.service';
import {UserDataPreparationService} from '../../services/user-data-preparation.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements CanComponentDeactivateInterface {
  unSaved: boolean = false;

  constructor(
    private userData: UserDataPreparationService,
    private userService: UsersApiService,
    private router: Router
  ) {
  }

  saveUser(user: any): void {
    let newUser = this.userData.createNewUser(user);
    this.userService.addNewUser(newUser);
    this.unSaved = true;

    this.router.navigate([AppRouteEnum.Users]);
  }

  canDeactivate(): boolean {
    return this.unSaved;
  }
}
