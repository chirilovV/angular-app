import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user.interface';
import {Address} from '../../models/address.interface';
import {take} from 'rxjs';
import {UsersApiService} from '../../services/users-api.service';

@Component({
  selector: 'user-form-shell',
  templateUrl: './user-form-shell.component.html',
  styleUrls: ['./user-form-shell.component.scss']
})
export class UserFormShellComponent implements OnInit, DoCheck {
  formGroup!: FormGroup;
  id!: string;
  isUpdateMode!: boolean;

  @Input() user!: User;
  @Output() submitForm = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UsersApiService
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
    this.id = this.route.snapshot.params['id'];
    this.isUpdateMode = this.id !== undefined;

    if(this.isUpdateMode) {
      this.userService.getUser(this.id)
      .pipe(take(1))
      .subscribe(response => {
        if(response !== undefined) {
          this.user = response;
        }
      });
    }
  }

  formInit(name: string, form: AbstractControl): void {
    this.formGroup.addControl(name, form);

    if(this.isUpdateMode) {
      if('user' === name) {
        this.formGroup.get('user')?.patchValue(this.user);
      }
      if('addresses' === name && this.user.addresses) {
        this.initAddressForm(this.user.addresses);
      }
    }
  }

  initAddressForm(addresses: any): void {
    (this.formGroup.get('addresses') as FormArray).clear();

    addresses.map((address: Address) => {
        this.fb.group({
          addressLine: new FormControl(address.addressLine),
          city: new FormControl(address.city),
          zip: new FormControl(address.zip),
        });
      }
    );
  }

  onSubmit(): void {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.valid) {
      this.submitForm.emit(this.formGroup);
    }
  }

  public ngDoCheck(): void {
    if(this.formGroup.touched && !this.formGroup.pristine) {
      this.formGroup.markAsDirty();
    }
  }
}
