import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {LocalUsersService} from '../../users/services/local-users-service';
import {MatTableDataSource} from '@angular/material/table';
import {UserStatisticsColumnsName} from '../enums/userStatisticsColumnsName';


@Component({
  selector: 'app-client-side-statistics',
  templateUrl: './client-side-statistics.component.html',
  styleUrls: ['./client-side-statistics.component.scss']
})
export class ClientSideStatisticsComponent implements OnInit {

  columnsName = UserStatisticsColumnsName;
  displayedColumns: UserStatisticsColumnsName[] = [
    UserStatisticsColumnsName.name,
    UserStatisticsColumnsName.email,
    UserStatisticsColumnsName.age,
    UserStatisticsColumnsName.department,
    UserStatisticsColumnsName.addresses
  ];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersApiService: LocalUsersService) { }

  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);

      this.dataSource.sortingDataAccessor = (item: any, property: any) => {
        switch(property){
          case 'name':
            return item.personalInfo.lastName;
          case 'email':
            return item.personalInfo.email;
          case 'age':
            return item.personalInfo.age;
          case 'department':
            return item.companyInfo.department;
          default:
            return item[property];
        }
      };
    });
  }

}
