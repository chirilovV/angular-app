import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegisterService} from '../../services/register.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';

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
    private registerService: RegisterService,
    private notify: NotificationService,
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
    if(this.registerFormGroup.valid) {
      this.registerService.findUser(
        this.registerFormGroup.value['userName'],
        this.registerFormGroup.value['password'],
      ).subscribe(response => {
          if('ok' === response.status) {
            sessionStorage.setItem('name', this.registerFormGroup.value['userName']);

            this.notify.success(response.message);

            setInterval(() => {
              this.router.navigate([AppRouteEnum.Home]);
            }, 50);
          } else {
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
