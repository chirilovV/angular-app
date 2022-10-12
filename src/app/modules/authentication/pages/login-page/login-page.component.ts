import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';
import {AuthorizationService} from '../../services/authorization.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  pageName: string = 'Login';
  loginFormGroup!: FormGroup;
  username!: string;
  password!: string;
  private subscription: Subscription | undefined;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: AuthenticationService,
    private notify: NotificationService,
    private authService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
  }

  submit(): void {
    this.loginFormGroup.markAllAsTouched();
    let userName = this.loginFormGroup.value['userName'];
    let password = this.loginFormGroup.value['password'];

    if(this.loginFormGroup.valid) {
      this.subscription = this.registerService.findUser(userName, password)
      .subscribe(response => {
          if('ok' === response.status) {
            this.authService.authorise(userName);
            this.notify.success(response.message);

            this.router.navigate([AppRouteEnum.Home]);
          } else {
            this.loginFormGroup.controls['userName'].setErrors({'incorrect': true});
            this.loginFormGroup.controls['password'].setErrors({'incorrect': true});
          }
        },
      );
    }
  }

  errorHandler(controlName: string, errorName: string): boolean {
    return this.loginFormGroup.controls[controlName].hasError(errorName);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  };
}
