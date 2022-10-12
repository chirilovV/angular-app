import {Component, OnInit} from '@angular/core';
import {CompanyInfo} from '../../models/new-user.interface';
import {LocalUsersService} from '../../services/local-users-service';

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})

export class CompanyInfoComponent implements OnInit {
  companyInfo!: CompanyInfo;

  constructor(private usersService: LocalUsersService) {
  }

  public ngOnInit(): void {
    this.usersService.getUserById('1').subscribe(response => {
      if(response) {
        this.companyInfo = response.companyInfo;
      }
    });
  }
}
