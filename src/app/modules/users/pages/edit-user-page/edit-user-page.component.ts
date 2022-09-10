import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.interface";
import {NotificationService} from "../../../shared/services/notification.service";

@Component({
  selector: 'edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit {

  user!: User;
  private userId: string = '';

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    public notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']
    });

    if (this.userId !== '') {
      this.userService.getUserById(this.userId).subscribe(
        response => {
          if (response !== undefined)
            this.user = response
        }
      );
    }
  }

  updateUser(userForm: any) {
    this.userService.updateUser(this.userId, userForm).subscribe(response => {
      this.notificationService.success(response);
    });

    // setInterval(() => {
    //   this.router.navigate([AppRouteEnum.Users]);
    // }, 2500)
  }
}
