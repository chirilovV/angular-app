import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {UserStatisticsColumnsName} from '../enums/userStatisticsColumnsName';
import {LocalUser} from '../../users/models/new-user.interface';
import {LocalUsersService} from '../../users/services/local-users-service';
import {MatSort, MatSortable} from '@angular/material/sort';

@Component({
  selector: 'app-server-side-statistics',
  templateUrl: './server-side-statistics.component.html',
  styleUrls: ['./server-side-statistics.component.scss']
})
export class ServerSideStatisticsComponent implements OnInit, AfterViewInit {
  displayedColumns: UserStatisticsColumnsName[] = [
    UserStatisticsColumnsName.name,
    UserStatisticsColumnsName.email,
    UserStatisticsColumnsName.age,
    UserStatisticsColumnsName.department,
    UserStatisticsColumnsName.addresses
  ];

  dataSource: MatTableDataSource<LocalUser> = new MatTableDataSource<LocalUser>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersApiService: LocalUsersService) { }


  public ngOnInit(): void {
    this.usersApiService.getUsers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.initTableConfig();
      console.log(response);
    });
  }

  ngAfterViewInit(): void {
//    this.initTableConfig();
  }

  private initTableConfig(): void {
    this.sort.sort(({id: UserStatisticsColumnsName.name, start: 'asc'}) as MatSortable);
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
