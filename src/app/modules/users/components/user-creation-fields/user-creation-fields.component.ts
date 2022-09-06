import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenderEnum} from "../../../core/Enums/gender.enum";
import {CustomValidatorService} from "../../../shared/services/customValidator.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'user-creation-fields',
  templateUrl: 'user-creation-fields.component.html',
  styleUrls: ['user-creation-fields.component.scss']
})
export class UserCreationFieldsComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  userFormGroup!: FormGroup;
  GenderEnum = GenderEnum;

  constructor(private formBuilder: FormBuilder, private userService: UsersService,) {
  }

  public ngOnInit(): void {
    this.userFormGroup = this.createUserFormGroup();
    this.formGroup.addControl('user', this.userFormGroup)
  }

  createUserFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [0, [Validators.required, Validators.min(15), Validators.max(100)]],
      company: ['', [Validators.required, Validators.maxLength(35)]],
      department: ['', Validators.minLength(6)],
      gender: [GenderEnum.NotSpecified, Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, CustomValidatorService.validateEmail],
        [CustomValidatorService.existingEmailValidator(this.userService)]
      ],
    });
  }
}
