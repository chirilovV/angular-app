import {Component, Input, OnInit, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {User} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private isShowing: boolean = false;
  private isActive: boolean = false;

  @Input() users!: User[];
  @Input() actionButtons!: TemplateRef<any>;
  @ViewChildren('userItem') userComponents!: QueryList<UserListItemComponent>;

  constructor(private userService: UsersService) {
  };


  ngOnInit(): void {
    this.users = this.userService.getUsers();
  };

  toggleDisplay(): void {
    this.isShowing = !this.isShowing;
  };

  isVisible(isActive: boolean): boolean {
    return this.isShowing && !isActive;
  };

  changeUsersStatus(): void {
    this.isActive = !this.isActive;
    this.userComponents.forEach(component => {
      component.user.isActivated = !this.isActive
    });
    // this.userService.changeStatusForAllUsers(this.isActive)
  };

  canBeDeactivated(user: User): boolean {
    return user.isActivated && (user.age >= 18)
  };
}
