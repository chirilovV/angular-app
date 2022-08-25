import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent implements OnInit {
  isShowing: boolean = false;
  @Input() user!: User;

  constructor(private userService: UsersService,) {
  };

  ngOnInit(): void {
  };

  getStatusName(status: boolean): string {
    return status ? 'active' : 'non-active';
  };

  getClassName(isActive: boolean): string {
    return (this.isShowing && !isActive) ? 'hidden' : '';
  };

  deactivateUser(user: User): void {
    this.userService.updateStatus(user);
  };
}
