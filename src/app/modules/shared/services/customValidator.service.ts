import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors} from "@angular/forms";
import {map, Observable} from "rxjs";
import {UsersService} from "../../users/services/users.service";


export class CustomValidatorService {

  // TODO to add interface for return type
  static validateEmail(control: FormControl) {
    let EMAIL_REGEXP = new RegExp(`^[\\w.+\\-]+@gmail\\.com$`);

    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

  static existingEmailValidator(usersService: UsersService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return usersService.findUserByEmail(control.value).pipe(
        map(val => {
          return val ? {
            existingEmail: {valid: false}
          } : null
        }))
    }
  }
}
