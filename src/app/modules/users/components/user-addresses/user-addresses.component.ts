import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.scss']
})
export class UserAddressesComponent {
  @Input() formGroup!: FormGroup;
  addressFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  addAddress(): void {
    this.addressFormGroup = this.formBuilder.group({
      addressLine: ['', Validators.required],
      city: [''],
      zip: [{value: '', disabled: true}]
    });

    this.addresses.push(this.addressFormGroup)
  }

  updateZipValidator(): void {
    if (this.addressFormGroup.get('city')?.value !== '') {
      this.addressFormGroup.get('zip')?.setValidators(Validators.required);
      this.addressFormGroup.get('zip')?.updateValueAndValidity();
      this.addressFormGroup.get('zip')?.enable()
    } else {
      this.addressFormGroup.get('zip')?.clearValidators();
      this.addressFormGroup.get('zip')?.updateValueAndValidity();
      this.addressFormGroup.get('zip')?.disable()
    }
  }

  deleteAddress(lessonIndex: number): void {
    this.addresses.removeAt(lessonIndex);
  }

  get addresses(): FormArray {
    return this.formGroup.get('addresses') as FormArray
  }

  public errorHandler(controlName: string, errorName: string): boolean {
    return this.addressFormGroup.controls[controlName].hasError(errorName);
  }
}
