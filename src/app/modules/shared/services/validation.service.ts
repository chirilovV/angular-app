import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  validate(formGroup: FormGroup): boolean {
    let isFormValid: boolean = true;
    if (formGroup.invalid) {
      for (const control of Object.keys(formGroup.controls)) {
        if (formGroup.controls[control]?.errors?.['required']) {
          formGroup.controls[control].markAsTouched();
        }
      }

      isFormValid = false;
    }

    return isFormValid;
  }

}
