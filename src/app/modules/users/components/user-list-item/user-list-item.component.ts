import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent implements OnInit, DoCheck {
  isShowing: boolean = false;
  @Input() user!: User;
  private oldUser!: User;

  constructor(private userService: UsersService, private cd: ChangeDetectorRef) {
  };

  ngOnInit(): void {
    this.oldUser = this.user
  };

  ngDoCheck() {
    if (this.user !== this.oldUser) {
      this.cd.markForCheck();
    }
  };

  getStatusName(status: boolean): string {
    return status ? 'active' : 'non-active';
  };

  getClassName(isActive: boolean): string {
    return (this.isShowing && !isActive) ? 'hidden' : '';
  };

  deactivateUser(user: User): void {
    this.user = {
      name: user.name,
      age: user.age,
      isActivated: !user.isActivated,
      imagePath: user.imagePath
    }

    this.userService.updateStatus(user);
  };
}
