import {Component} from '@angular/core';
import {AppRouteEnum} from '../../Enums/appRouteEnum';

@Component({
  selector: 'default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent {
  appPaths = AppRouteEnum;
}
