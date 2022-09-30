import {Component} from '@angular/core';
import {AppRouteEnum} from '../../Enums/appRouteEnum';
import {AuthorisationService} from '../../../authentication/services/authorisation.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appPaths = AppRouteEnum;

  constructor(private authService: AuthorisationService) {
  }

  get isAuthorised() {
    return this.authService.isUserAuthorised();
  }
}
