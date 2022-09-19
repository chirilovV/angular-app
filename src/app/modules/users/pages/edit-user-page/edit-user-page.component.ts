import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.interface';
import {NotificationService} from '../../../shared/services/notification.service';
import {Subscription, take} from 'rxjs';
import {CanComponentDeactivateInterface} from '../../../shared/models/canComponentDeactivate.interface';
import {UserFormShellComponent} from '../../components/user-form-shell/user-form-shell.component';
import {UsersResourceService} from '../../services/users-resource.service';

@Component ({
  selector: 'edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit, CanComponentDeactivateInterface {

  user!: User;
  isFormSaved: boolean = true;
  subscription: Subscription | undefined;
  @ViewChild (UserFormShellComponent) userForm!: UserFormShellComponent;
  private userId: string = '';

  constructor (
    private userService: UsersResourceService,
    private router: Router,
    private route: ActivatedRoute,
    public notificationService: NotificationService,
  ) {
  }

  ngOnInit (): void {
    this.userId = this.route.snapshot.params['id'];

    if ('' !== this.userId) {
      this.userService.getUser (this.userId)
        .pipe (take (1))
        .subscribe (
          response => {
            if (response !== undefined) {
              this.user = response;
            }
          }
        );
    }
  }

  updateUser (userForm: any) {
    this.userService.updateUser (this.userId, userForm).pipe (take (1)).subscribe (response => {
      this.notificationService.success (response);
    });

    this.isFormSaved = false;
  }

  canDeactivate (): boolean {
    return this.isFormSaved && !this.userForm.formGroup.dirty;
  }
}