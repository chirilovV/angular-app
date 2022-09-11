import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.interface";
import {NotificationService} from "../../../shared/services/notification.service";
import {Observable, of, Subscription, take} from "rxjs";

@Component({
  selector: 'edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit {

  user!: User;
  isFormSaved: boolean = true;
  subscription: Subscription | undefined;
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
      this.userService.getUserById(this.userId).pipe(take(1)).subscribe(
        response => {
          console.log('here 111')
          if (response !== undefined)
            this.user = response
        }
      );
    }
  }

  updateUser(userForm: any) {
    this.userService.updateUser(this.userId, userForm).pipe(take(1)).subscribe(response => {
      this.notificationService.success(response);
    });

    this.isFormSaved = false;

    // setInterval(() => {
    //   this.router.navigate([AppRouteEnum.Users]);
    // }, 2500)
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.isFormSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result);
    }
    return true;
  }
}
