import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenderEnum} from "../../../core/Enums/gender.enum";
import {User} from "../../models/user.interface";
import {CustomValidatorService} from "../../../shared/services/customValidator.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'user-creation-form',
  templateUrl: 'user-creation-form.component.html',
  styleUrls: ['user-creation-form.component.scss']
})
export class UserCreationFormComponent implements OnInit {
  @Output() formGroupInit = new EventEmitter<FormGroup>();
  user!: User;
  userForm!: FormGroup;
  genderEnum = GenderEnum;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.user = {} as User;
  }

  public ngOnInit(): void {
    this.userForm = this.createForm();
    this.formGroupInit.emit(this.userForm);
  }

  createForm() {
    return this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      age: [this.user.age, [Validators.required, Validators.min(15), Validators.max(100)]],
      company: [this.user.company, [Validators.required, Validators.maxLength(35)]],
      department: [this.user.department, [Validators.minLength(6)]],
      gender: [GenderEnum.notSpecified, [Validators.required]],
      email: [
        this.user.email,
        [Validators.required, Validators.email, CustomValidatorService.validateEmail],
        [CustomValidatorService.existingEmailValidator(this.usersService)]
      ],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];

    return control.invalid && control.touched;
  }

}
