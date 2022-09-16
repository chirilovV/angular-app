import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user.interface';
import {Subscription} from 'rxjs';
import {PaginatorComponent} from '../../../shared/components/paginator/paginator.component';
import {PageOptions} from '../../../shared/models/pageOptions';

@Component ({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: any[] = [];
  loader: boolean = true;
  subscription: Subscription[] = [];
  totalItems: number = 0;

  @Output () updateTotals = new EventEmitter ();
  @ViewChild (PaginatorComponent) paginator!: PaginatorComponent;

  private defaultPageOptions: PageOptions = {
    pageIndex: 0,
    pageSize: 5
  };

  constructor (private usersService: UsersService) {};

  get favorites (): User[] {
    let favoriteUsers: User[] = [];
    this.subscription.push (this.usersService.getFavorites ().subscribe (items => {
      favoriteUsers = items;
    }));

    return favoriteUsers;
  }

  ngOnInit (): void {
    this.getAllUsers ();
  };

  getAllUsers (pageOptions?: PageOptions): void {
    this.loader = true;
    this.subscription.push (
      this.usersService.getUsers (pageOptions ? pageOptions : this.defaultPageOptions)
        .subscribe (
          response => {
            this.totalItems = response.total_count;
            this.users = response.items;
            this.loader = false;

            if (this.paginator) {
              this.paginator.length = response.total_count;
            }
          },
        )
    );
  }

  search (keyword: string): void {
    this.loader = true;
    this.users = [];

    this.subscription.push (this.usersService.search (keyword).subscribe (
      response => {
        this.totalItems = response.total_count;
        this.users = response.items;
        this.loader = false;

        if (this.paginator) {
          this.paginator.length = response.total_count;
        }
      },
    ));
  }

  toggleFavorites (user: User): void {
    user.isFavorite = !user.isFavorite;
    this.usersService.toggleFavorites (user.id);
  }

  ngOnDestroy (): void {
    this.subscription?.forEach (item => {
      item.unsubscribe ();
    });
  }
}
