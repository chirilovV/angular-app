import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidatorService} from "../../../shared/services/customValidator.service";

@Component({
  selector: 'user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.scss']
})
export class UserAddressesComponent implements OnInit{
  @Input() formGroup!: FormGroup;
  addressFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {

  }

  addAddress() {
    this.addressFormGroup = this.formBuilder.group({
      addressLine: ['', Validators.required],
      city: [''],
      zip: [{value: '', disabled: true}, CustomValidatorService.conditionallyRequiredValidator]
    });

    this.addresses.push(this.addressFormGroup)
  }

  disableToggle() {
   if(this.addressFormGroup.get('city')?.value !== ''){
     this.addressFormGroup.get('zip')?.enable()
   }else {
     this.addressFormGroup.get('zip')?.disable()
   }
  }

  deleteAddress(lessonIndex: number) {
    this.addresses.removeAt(lessonIndex);
  }

  get addresses() {
    return this.formGroup.get('addresses') as FormArray
  }


}
