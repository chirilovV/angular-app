import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from 'src/app/modules/shared/services/notification.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Subscription, take} from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  pageName: string = 'Register';
  registerFormGroup!: FormGroup;
  subscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private registerService: AuthenticationService,
    private notify: NotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
        userName: ['', [
          Validators.required,
//          Validators.minLength(6),
//          Validators.maxLength(15)
        ]],
        password: [null, Validators.compose([
//          Validators.required,
//          Validators.minLength(8),
//          Validators.maxLength(20),
//          CustomValidatorService.patternValidator(/\d/, {hasNumber: true}),
//          CustomValidatorService.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
//          CustomValidatorService.patternValidator(/[a-z]/, {hasSmallCase: true}),
        ]),
        ],
        confirm: [null, [Validators.required]],
      },
      {
//        validators: CustomValidatorService.passwordMatchValidator
      }
    );
  }

  submit(): void {
    this.registerFormGroup.markAllAsTouched();
    if(this.registerFormGroup.valid) {
      this.registerService.addUser(this.registerFormGroup.value)
      .pipe(take(1))
      .subscribe(
        response => {
          this.notify.success(response);
//          console.log('aici');
//          setInterval(() => {
//            this.router.navigate([AppRouteEnum.Login]);
//          }, 1000);
        }
      );
    }
  }

  errorHandler(controlName: string, errorName: string): boolean {
    return this.registerFormGroup.controls[controlName].hasError(errorName);
  }
}
