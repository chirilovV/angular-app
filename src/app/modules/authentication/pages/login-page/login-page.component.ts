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
  registerFormGroup!: FormGroup;
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
    this.registerFormGroup = this.fb.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
  }

  submit(): void {
    this.registerFormGroup.markAllAsTouched();
    let userName = this.registerFormGroup.value['userName'];
    let password = this.registerFormGroup.value['password'];

    if(this.registerFormGroup.valid) {
      this.subscription = this.registerService.findUser(userName, password)
      .subscribe(response => {
          if('ok' === response.status) {
            this.authService.authorise(userName);
            this.notify.success(response.message);

            this.router.navigate([AppRouteEnum.Home]);
          } else {
            this.registerFormGroup.controls['userName'].setErrors({'incorrect': true});
            this.registerFormGroup.controls['password'].setErrors({'incorrect': true});
          }
        },
      );
    }
  }

  errorHandler(controlName: string, errorName: string): boolean {
    return this.registerFormGroup.controls[controlName].hasError(errorName);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  };
}
