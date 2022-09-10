import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.scss']
})
export class UserAddressesComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Output() onFormGroupChange: EventEmitter<FormArray> = new EventEmitter<FormArray>();

  addressFormGroup!: FormArray;

  constructor(private formBuilder: FormBuilder) {
  }

  get addresses(): FormArray {
    return this.formGroup.get('addresses') as FormArray
  }

  addAddress(): void {
    this.addresses.push(this.addressFormGroup)
  }

  updateZipValidator(): void {
    if (this.addressFormGroup.get('city')?.value !== '') {
      this.addressFormGroup.get('zip')?.setValidators(Validators.required);
      this.addressFormGroup.get('zip')?.enable()
    } else {
      this.addressFormGroup.get('zip')?.clearValidators();
      this.addressFormGroup.get('zip')?.disable()
    }
  }

  deleteAddress(lessonIndex: number): void {
    this.addresses.removeAt(lessonIndex);
  }

  ngOnInit(): void {
    this.addressFormGroup = this.formBuilder.array([
      this.formBuilder.group({
        addressLine: ['', Validators.required],
        city: [''],
        zip: [{value: '', disabled: true}]
      })
    ]);

    this.onFormGroupChange.emit(this.addressFormGroup);
  }

  public errorHandler(controlName: string, errorName: string): boolean {
    return false;
  }
}
