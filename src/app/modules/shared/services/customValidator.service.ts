import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {map, Observable, take} from 'rxjs';
import {UsersApiService} from '../../users/services/users-api.service';


export class CustomValidatorService {
  constructor() {
  }

  static validateEmail(control: FormControl): null | { validateEmail: { valid: boolean } } {
    let EMAIL_REGEXP = new RegExp(`^[\\w.+\\-]+@gmail\\.com$`);

    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

  static existingEmailValidator(usersService: UsersApiService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return usersService.findUserByEmail(control.value).pipe(take(1),
        map(val => {
          return val ? {
            existingEmail: {valid: false}
          } : null;
        }));
    };
  }

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!control.value) {
        return null;
      }

      const valid: boolean = regex.test(control.value);
      return valid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confirm')?.value;

    if(password !== confirmPassword) {
      control.get('confirm')?.setErrors({noPasswordMatch: true});
    }
  }

  static conditionallyRequiredValidator(formControl: AbstractControl): ValidationErrors | null {
    if(!formControl.parent) {
      return null;
    }

    if(formControl.parent.get('city')?.value) {
      return Validators.required(formControl);
    }
    return null;
  }
}
