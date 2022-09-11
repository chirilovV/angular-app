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

  get addresses(): FormArray {
    return this.formGroup.get('addresses') as FormArray;
  }

  getAddressForm(i: number): FormGroup {
    return this.addresses.controls[i] as FormGroup;
  }

  addAddress(): void {
    let newForm = this.formBuilder.group({
      addressLine: ['', Validators.required],
      city: [''],
      zip: [{value: '', disabled: true}]
    });

    this.addresses.push(newForm)
  }

  deleteAddress(lessonIndex: number): void {
    this.addresses.removeAt(lessonIndex);
  }
}
