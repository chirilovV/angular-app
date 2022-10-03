import {Component, OnInit} from '@angular/core';
import {LocalUsersService} from '../../../users/services/local-users-service';
import {CompanyInfo} from '../../models/company-info.interface';
import {take} from 'rxjs';

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
    this.usersService.getUserById('a5')
    .pipe(take(1))
    .subscribe(
      response => {
        this.company = {
          fullName: response.company,
          department: response.department,
          salary: response.salary,
          currency: response.currency
        };
      }
    );
  }
}
