import {Component, OnInit} from '@angular/core';
import {LocalUsersService} from '../../../users/services/local-users-service';
import {CompanyInfo} from '../../models/company-info.interface';

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})

export class CompanyInfoComponent implements OnInit {
  company!: CompanyInfo;

  constructor(private usersService: LocalUsersService,) { }

  ngOnInit(): void {
    this.getCompanyData();
  }

  getCompanyData(): void {
    this.usersService.getUserById('a5').subscribe(
      response => {
        this.company = {
          fullName: response.company,
          department: response.department
        };
      }
    );
  }
}
