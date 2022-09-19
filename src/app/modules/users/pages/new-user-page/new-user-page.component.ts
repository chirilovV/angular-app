import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';
import {CanComponentDeactivateInterface} from '../../../shared/models/canComponentDeactivate.interface';
import {UsersResourceService} from '../../services/users-resource.service';

@Component ({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements CanComponentDeactivateInterface {
  unSaved: boolean = false;

  constructor (private userService: UsersResourceService, private router: Router) {
  }

  saveUser (user: any) {
    this.userService.addNewUser (user);
    this.unSaved = true;

    this.router.navigate ([AppRouteEnum.Users]);
  }

  canDeactivate (): boolean {
    return this.unSaved;
  }
}
