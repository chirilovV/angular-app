import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {ValidationService} from "../../../shared/services/validation.service";
import {Router} from "@angular/router";
import {AppRouteEnum} from "../../../core/Enums/AppRouteEnum";

@Component({
  selector: 'user-form-shell',
  templateUrl: './user-form-shell.component.html',
  styleUrls: ['./user-form-shell.component.scss']
})
export class UserFormShellComponent implements OnInit {
  @Input() userFormGroup!: FormGroup;
  @Input() userForm!: FormGroup;
  isFormValid: boolean = false;
  private defaultAvatarPath = ' assets/img/defaultUserAvatar.png';

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private validatorService: ValidationService,
    private router: Router
  ) {
  }

  onCreateButtonClick(): void {
    if (this.userForm.controls['user']) {
      this.userService.addNewUser(this.retrieveUserData());
      this.router.navigate([AppRouteEnum.Users]);
    }
  }

  sendFormValue(formGroup: FormGroup): void {
    this.isFormValid = true
    this.userForm.addControl('user', formGroup);
  }

  retrieveUserData(): User {
    const newUser = {...this.userForm.controls['user'].value};
    newUser.id = Math.random().toString(16).slice(2);
    newUser.imageUrl = (newUser.imageUrl === undefined) ? this.defaultAvatarPath : newUser.imageUrl;

    return newUser;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({})
  }
}
