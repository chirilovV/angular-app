import {Component, OnInit} from '@angular/core';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';
import {CompanyInfo, LocalUser, PersonalInfo} from '../../models/new-user.interface';
import {Address} from '../../models/address.interface';
import {LocalUsersService} from '../../services/local-users-service';
import {NotificationService} from '../../../shared/services/notification.service';
import {take} from 'rxjs';

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

  navLinks = [
    {
      label: 'Personal Info',
      link: AppRouteEnum.ProfileInfo,
    },
    {
      label: 'Company info',
      link: AppRouteEnum.CompanyInfo,
    },
    {
      label: 'Contacts',
      link: AppRouteEnum.UserContacts,
    },
  ];

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
    .subscribe((response: LocalUser | undefined) => {
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
