import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.interface";
import {ValidationService} from "../../../shared/services/validation.service";

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent {
  userForm!: FormGroup;
  private defaultAvatarPath = ' assets/img/defaultUserAvatar.png'

  constructor(
    private userService: UsersService,
    private validatorService: ValidationService,
    private router: Router
  ) {
  }

  onFormGroupInit(userForm: FormGroup): void {
    this.userForm = userForm;
  }

  onCreateButtonClick(): void {
    if (this.validatorService.validate(this.userForm)) {
      this.userService.addNewUser(this.retrieveUserData());
      this.userForm.reset();
      this.router.navigate(['users']);
    }
  }

  retrieveUserData(): User {
    const newUser: User = {...this.userForm.value};
    newUser.id = Math.random().toString(16).slice(2);
    newUser.imageUrl = (newUser.imageUrl === undefined) ? this.defaultAvatarPath : newUser.imageUrl;

    return newUser;
  }

}
