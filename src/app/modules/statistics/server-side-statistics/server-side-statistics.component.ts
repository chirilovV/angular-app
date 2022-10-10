import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {UsersApiService} from '../../users/services/users-api.service';
import {PageOptions} from '../../shared/models/pageOptions';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-server-side-statistics',
  templateUrl: './server-side-statistics.component.html',
  styleUrls: ['./server-side-statistics.component.scss']
})
export class ServerSideStatisticsComponent implements OnInit {

  displayedColumns: string[] = ['login', 'id', 'url'];
  dataSource: any = [];
  isLoading: boolean = false;
  users: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersService: UsersApiService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(pageOptions?: PageOptions): void {
    console.log(pageOptions);
    this.isLoading = true;
    this.usersService.getUsers(pageOptions)
    .subscribe(response => {
        this.isLoading = false;
        this.users = response.items;
        this.users.length = response.total_count;

        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
      },
    );
  }

  getNextData(currentSize: number, pageOptions: PageOptions) {
    this.usersService.getUsers(pageOptions)
    .subscribe(response => {
        this.isLoading = false;
        this.users.length = currentSize;
        this.users.push(...response.items);
        this.users.length = response.total_count;

        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
      },
    );
  }

  pageChanged(event: any): void {
    this.isLoading = true;
    let previousSize = event.pageIndex * event.pageSize;

    let pageOptions: PageOptions = {
      pageIndex: event.pageIndex,
      pageSize: event.pageSize
    };

    this.getNextData(previousSize, pageOptions);
  }
}
