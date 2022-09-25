import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../auth/services/auth.service';
import {RegisterService} from '../../../../auth/services/register.service';
import {AppRouteEnum} from '../../../Enums/appRouteEnum';
import {Router} from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  isUserAuth: boolean = false;

  constructor(
    private authService: AuthService,
    private registerService: RegisterService,
    private router: Router,
  ) { }

  get isAuth(): boolean {
    this.authService.authorise().subscribe(response => {
      this.isUserAuth = response;
    });

    return this.isUserAuth;
  }

  get userName(): string | null {
    return sessionStorage.getItem('name');
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.registerService.logOut();

    setInterval(() => {
      this.router.navigate([AppRouteEnum.Default]);
    }, 50);
  }


}
