import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenderEnum} from "../../../core/Enums/gender.enum";
import {User} from "../../models/user.interface";
import {CustomValidatorService} from "../../../shared/services/customValidator.service";
import {UsersService} from "../../services/users.service";
import {ValidationService} from "../../../shared/services/validation.service";

@Component({
  selector: 'user-creation-fields',
  templateUrl: 'user-creation-fields.component.html',
  styleUrls: ['user-creation-fields.component.scss']
})
export class UserCreationFieldsComponent implements OnInit {
  user!: User;
  GenderEnum = GenderEnum;

  @Input()userFormGroup!: FormGroup;
  @Output() formGroupInit = new EventEmitter<FormGroup>();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private validatorService: ValidationService,
  ) {
    this.user = {} as User;
  }

  public ngOnInit(): void {
    this.userFormGroup = this.createUserFormGroup();
  }

  createUserFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      age: [
        this.user.age,
        [Validators.required, Validators.min(15), Validators.max(100)]
      ],
      company: [
        this.user.company,
        [Validators.required, Validators.maxLength(35)]
      ],
      department: [this.user.department, Validators.minLength(6)],
      gender: [GenderEnum.NotSpecified, Validators.required],
      email: [
        this.user.email,
        [Validators.required, Validators.email, CustomValidatorService.validateEmail],
        [CustomValidatorService.existingEmailValidator(this.userService)]
      ],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.userFormGroup.controls[controlName];

    return control.invalid && control.touched;
  }

  emitFormValue(): void {
    if (this.validatorService.validate(this.userFormGroup)){
      this.formGroupInit.emit(this.userFormGroup);
    }
  }
}
