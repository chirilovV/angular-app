import {Component, OnInit} from '@angular/core';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';
import {take} from 'rxjs';
import {LocalUsersService} from '../../../users/services/local-users-service';
import {Address} from '../../../users/models/address.interface';
import {CompanyInfo} from '../../models/company-info.interface';
import {NewUser, PersonalInfo} from '../../../users/models/new-user.interface';
import {NotificationService} from '../../../shared/services/notification.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  appPaths = AppRouteEnum;
  user!: PersonalInfo;
  companyInfo!: CompanyInfo;
  addresses: Address[] = [];

  constructor(
    private usersService: LocalUsersService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.usersService.getUserById('a5')
    .pipe(take(1))
    .subscribe((response: NewUser | undefined) => {
        if(response === undefined) {
          this.notificationService.warning('User not found');
        } else {
          this.user = response.personalInfo;
          this.companyInfo = response.companyInfo;

          if(response.addresses) {
            this.addresses = response.addresses;
          }
        }
      }
    );
  }
}
