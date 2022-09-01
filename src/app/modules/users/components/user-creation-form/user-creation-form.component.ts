import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenderEnum} from "../../../core/Enums/gender.enum";
import {User} from "../../models/user.interface";

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

  constructor(private formBuilder: FormBuilder) {
    this.user = {} as User;
  }

  public ngOnInit(): void {
    this.userForm = this.createForm();
    this.formGroupInit.emit(this.userForm);
  }

  createForm() {
    return this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: [this.user.lastName, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      age: [this.user.age, [Validators.required, Validators.min(16), Validators.max(99),]],
      email: [this.user.email, [Validators.required, Validators.email]],
      company: [this.user.company, [Validators.required, Validators.maxLength(50)]],
      department: [this.user.department, [Validators.required, Validators.maxLength(50)]],
      gender: [GenderEnum.notSpecified, [Validators.required]],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];

    return control.invalid && control.touched;
  }

}
