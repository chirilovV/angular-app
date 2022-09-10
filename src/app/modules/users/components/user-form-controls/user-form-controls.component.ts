import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenderEnum} from "../../../core/Enums/gender.enum";
import {CustomValidatorService} from "../../../shared/services/customValidator.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'user-form-controls',
  templateUrl: 'user-form-controls.component.html',
  styleUrls: ['user-form-controls.component.scss']
})
export class UserFormControlsComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Output() onFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  userFormGroup!: FormGroup;
  GenderEnum = GenderEnum;

  constructor(private formBuilder: FormBuilder, private userService: UsersService,) {
  }

  public ngOnInit(): void {
    this.userFormGroup = this.createUserFormGroup();
    this.onFormGroupChange.emit(this.userFormGroup);
  }

  createUserFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(15), Validators.max(100)]],
      company: ['', [Validators.required, Validators.maxLength(35)]],
      department: ['', Validators.minLength(6)],
      gender: [GenderEnum.NotSpecified, Validators.required],
      email: [
        '',
        Validators.compose([Validators.required, Validators.email, CustomValidatorService.validateEmail]),
        [CustomValidatorService.existingEmailValidator(this.userService)]
      ],
    });
  }

  public errorHandler (controlName: string, errorName: string): boolean {
    return  this.userFormGroup.controls[controlName].hasError(errorName);
  }
}
