import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import {LocalUsersService} from '../../users/services/local-users-service';
import {MatTableDataSource} from '@angular/material/table';
import {UserStatisticsColumnsName} from '../enums/userStatisticsColumnsName';
import {LocalUser} from '../../users/models/new-user.interface';

@Component({
  selector: 'app-client-side-statistics',
  templateUrl: './client-side-statistics.component.html',
  styleUrls: ['./client-side-statistics.component.scss']
})
export class ClientSideStatisticsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columnsName = UserStatisticsColumnsName;
  dataSource: MatTableDataSource<LocalUser> = new MatTableDataSource();

  displayedColumns: UserStatisticsColumnsName[] = [
    UserStatisticsColumnsName.name,
    UserStatisticsColumnsName.email,
    UserStatisticsColumnsName.age,
    UserStatisticsColumnsName.department,
    UserStatisticsColumnsName.addresses
  ];


  constructor(private usersApiService: LocalUsersService) { }

  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      console.log(response);
//      this.initTableConfig();
    });
  }

  public ngAfterViewInit(): void {
    this.initTableConfig();
  }

  private initTableConfig(): void {
    this.sort.sort(({id: UserStatisticsColumnsName.name, start: 'asc', disableClear: false}) as MatSortable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
  }

  private sortingDataAccessor = (item: LocalUser, property: string) => {
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
        //@ts-ignore
        return item[property];
    }
  };

}
