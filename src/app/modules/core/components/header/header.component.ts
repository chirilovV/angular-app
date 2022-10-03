import {Component} from '@angular/core';
import {AppRouteEnum} from '../../Enums/appRouteEnum';
import {AuthorizationService} from '../../../authentication/services/authorization.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appPaths = AppRouteEnum;

  constructor(private authService: AuthorizationService) {
  }

  get isAuthorised() {
    return this.authService.isUserAuthorised();
  }
}
