import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss']
})
export class AddressItemComponent implements OnInit {

  @Input() addressForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateZipValidator(): void {
    if (this.addressForm.get('city')?.value !== '') {
      this.addressForm.get('zip')?.setValidators(Validators.required);
      this.addressForm.get('zip')?.enable()
    } else {
      this.addressForm.get('zip')?.clearValidators();
      this.addressForm.get('zip')?.disable()
    }
  }

  public errorHandler(controlName: string, errorName: string): boolean {
    return this.addressForm.controls[controlName].hasError(errorName);
  }
}
