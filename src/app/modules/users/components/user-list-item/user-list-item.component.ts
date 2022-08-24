import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  isShowing: boolean = false;
  @Input() user!: User;

  ngOnInit(): void {}

  changeStatus(user: User) {
    user.isActivated = !user.isActivated;
  }

  isActive(user: User): boolean {
    return user.isActivated && (user.age >= 18)
  }

  getStatus(status: boolean): string {
    return status ? 'active' : 'non-active'
  }

  getClassName(isActive: boolean): string {
    return (this.isShowing && !isActive) ? 'hidden' : '';
  }
}
