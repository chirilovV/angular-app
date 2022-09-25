import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../../services/register.service';
import {NotificationService} from '../../../../shared/services/notification.service';
import {CustomValidatorService} from '../../../../shared/services/customValidator.service';
import {AppRouteEnum} from '../../../../core/Enums/appRouteEnum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  pageName: string = 'Register';
  registerFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private notify: NotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
        userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
        password: [null, Validators.compose([
          Validators.required,
          Validators.minLength(8),
          CustomValidatorService.patternValidator(/\d/, {hasNumber: true}),
          CustomValidatorService.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
          CustomValidatorService.patternValidator(/[a-z]/, {hasSmallCase: true}),]),
        ],
        confirm: [null, [Validators.required]],
      },
      {
        validators: CustomValidatorService.passwordMatchValidator
      }
    );
  }

  submit(): void {
    this.registerFormGroup.markAllAsTouched();
    if(this.registerFormGroup.valid) {
      this.registerService.addUser(this.registerFormGroup.value).subscribe(
        response => {
          this.notify.success(response);

          setInterval(() => {
            this.router.navigate([AppRouteEnum.Login]);
          }, 1000);
        }
      );
    }
  }

  errorHandler(controlName: string, errorName: string): boolean {
    return this.registerFormGroup.controls[controlName].hasError(errorName);
  }
}
