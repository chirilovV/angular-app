import {Component, OnInit} from '@angular/core';
import {AppRouteEnum} from '../../Enums/appRouteEnum';
import {AuthService} from '../../../authentication/services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appPaths = AppRouteEnum;
  isAuth = false;

  constructor(private authService: AuthService) {
  }

  get isAuthorised() {
    this.authService.authorise().subscribe(response => {
      this.isAuth = response;
    });

    return this.isAuth;
  }

  ngOnInit(): void {
  }
}
