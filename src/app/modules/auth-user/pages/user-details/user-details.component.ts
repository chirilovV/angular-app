import {Component, OnInit} from '@angular/core';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';

export interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

  appPaths = AppRouteEnum;

  navLinks: NavLink[] = [
    {
      label: 'Personal Info',
      route: AppRouteEnum.ProfileInfo
    },
    {
      label: 'Company Info',
      route: AppRouteEnum.CompanyInfo
    },
    {
      label: 'Contacts',
      route: AppRouteEnum.UserContacts
    }
  ];


  ngOnInit(): void {
  }
}
