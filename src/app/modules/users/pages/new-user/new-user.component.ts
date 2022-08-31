import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenderEnum} from "../../../core/Enums/gender.enum";
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  @Output() formGroupInit = new EventEmitter<FormGroup>();
  user!: User;
  userForm!: FormGroup
  submitted: boolean = false;
  genderEnum = GenderEnum;


  private defaultAvatarPath = ' assets/img/defaultUserAvatar.png'

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router) {
    this.user = {} as User;
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get age() {
    return this.userForm.get('age');
  }

  get email() {
    return this.userForm.get('email');
  }

  get company() {
    return this.userForm.get('company');
  }

  get department() {
    return this.userForm.get('department');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  public ngOnInit(): void {
    this.userForm = this.createForm()
  }

  createForm() {
    return this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: [this.user.lastName, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      age: [this.user.age, [Validators.required, Validators.min(16), Validators.max(99),]],
      email: [this.user.email, [Validators.required]],
      company: [this.user.company, [Validators.maxLength(50)]],
      department: [this.user.department, [Validators.maxLength(50)]],
      gender: [GenderEnum.notSpecified, [Validators.required]],
    })
  }

  public validate(): void {
    if (this.userForm.invalid) {
      for (const control of Object.keys(this.userForm.controls)) {
        this.userForm.controls[control].markAsTouched();
      }
      return;
    }
  }

  onSubmit() {
    this.validate();
    this.submitted = true;
    if (this.userForm.valid) {
      this.userService.addNewUser(this.retrieveUserData())
      this.userForm.reset();
      this.router.navigate(['users']);
    }
  }

  retrieveUserData(): User {
    const newUser: User = {...this.userForm.value};
    newUser.id = Math.random().toString(16).slice(2);
    newUser.imageUrl = (newUser.imageUrl === undefined) ? this.defaultAvatarPath : newUser.imageUrl;

    return newUser
  }

}
