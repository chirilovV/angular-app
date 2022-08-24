import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {User} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";
import {UserListItemComponent} from "../user-list-item/user-list-item.component";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {
  users: User[] = [];
  isShowing: boolean = false;
  isActive: boolean = false;
  @ViewChildren('userItem') userComponents!: QueryList<UserListItemComponent>;

  constructor(private userService: UsersService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  toggleDisplay(): void {
    this.isShowing = !this.isShowing;
    this.userComponents.forEach(component => {
      component.isShowing = this.isShowing && component.user.isActivated;
    });
  }

  isVisible(isActive: boolean): boolean {
    return this.isShowing && !isActive;
  }

  deactivateAll(): void {
    this.isActive = !this.isActive;
    this.userComponents.forEach(component => {
      component.user.isActivated = !this.isActive;
    });
  }
}
