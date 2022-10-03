import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';
import {AuthorisationService} from '../../services/authorisation.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  pageName: string = 'Login';

  registerFormGroup!: FormGroup;
  username!: string;
  password!: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: AuthenticationService,
    private notify: NotificationService,
    private authService: AuthorisationService
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
      this.registerService.findUser(userName, password)
      .subscribe(response => {
          if('ok' === response.status) {
            this.authService.authorise(userName);
            this.notify.success(response.message);

            this.router.navigate([AppRouteEnum.Home]);
          } else {
            this.registerFormGroup.controls['userName'].setErrors({'incorrect': true});
            this.registerFormGroup.controls['password'].setErrors({'incorrect': true});
            this.registerFormGroup.markAllAsTouched();
            this.notify.warning(response.message);
          }
        },
      );
    }
  }

  errorHandler(controlName: string, errorName: string): boolean {
    return this.registerFormGroup.controls[controlName].hasError(errorName);
  }
}
