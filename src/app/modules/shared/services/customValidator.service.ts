import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, Validators} from "@angular/forms";
import {map, Observable, take} from "rxjs";
import {UsersService} from "../../users/services/users.service";


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

  static existingEmailValidator(usersService: UsersService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return usersService.findUserByEmail(control.value).pipe(take(1),
        map(val => {
          return val ? {
            existingEmail: {valid: false}
          } : null
        }))
    }
  }

  static conditionallyRequiredValidator(formControl: AbstractControl) {
    if (!formControl.parent) {
      return null;
    }

    if (formControl.parent.get('city')?.value) {
      return Validators.required(formControl);
    }
    return null;
  }
}
