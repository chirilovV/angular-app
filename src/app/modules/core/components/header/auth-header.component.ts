import {Component} from '@angular/core';
import {AppRouteEnum} from '../../Enums/appRouteEnum';

@Component({
  selector: 'auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent {
  appPaths = AppRouteEnum;
}
