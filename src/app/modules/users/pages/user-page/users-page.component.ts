import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {User} from '../../models/user.interface';
import {shareReplay, Subject, Subscription, switchMap, tap} from 'rxjs';
import {PaginatorComponent} from '../../../shared/components/paginator/paginator.component';
import {PageOptions} from '../../../shared/models/pageOptions';
import {delay} from 'rxjs/operators';
import {FavoriteUsersService} from '../../services/favorite-users.service';
import {UsersResourceService} from '../../services/users-resource.service';

@Component ({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: any[] = [];
  isLoading: boolean = false;
  totalItems: number = 0;
  subscription: Subscription[] = [];
  subject$ = new Subject ();

  @Output () updateTotals = new EventEmitter ();
  @ViewChild (PaginatorComponent) paginator!: PaginatorComponent;

  private defaultPageOptions: PageOptions = {
    pageIndex: 0,
    pageSize: 5
  };
  private randomNumber = Math.floor (Math.random () * (6000 - 1000 + 1)) + 1000;

  constructor (
    private usersService: UsersResourceService,
    private favoriteUser: FavoriteUsersService
  ) {};

  get favorites (): User[] {
    let favoriteUsers: User[] = [];
    this.subscription.push (this.favoriteUser.getFavorites ().subscribe (items => {
      favoriteUsers = items;
    }));

    return favoriteUsers;
  }

  ngOnInit (): void {
    this.getAllUsers ();
    this.initializeReloadSubscription ();
  };

  getAllUsers (pageOptions?: PageOptions): void {
    this.isLoading = true;
    this.subscription.push (
      this.usersService.getUsers (pageOptions ? pageOptions : this.defaultPageOptions)
        .subscribe (
          response => {
            this.totalItems = response.total_count;
            this.users = response.items;
            this.isLoading = false;

            if (this.paginator) {
              this.paginator.length = response.total_count;
            }
          },
        )
    );
  }

  search (keyword: string): void {
    this.isLoading = true;
    this.users = [];

    this.subscription.push (this.usersService.search (keyword).subscribe (
      response => {
        this.totalItems = response.total_count;
        this.users = response.items;
        this.isLoading = false;

        if (this.paginator) {
          this.paginator.length = response.total_count;
        }
      },
    ));
  }

  toggleFavorites (user: User): void {
    user.isFavorite = !user.isFavorite;
    this.favoriteUser.toggleFavorites (user.id);
  }

  refresh (): void {
    this.subject$.next (null);
  }

  downloadExcel (id: any): void {
    this.usersService.downloadExcel (id).subscribe (
      res => {
        console.log (res);
      });
  }

  saveUser (id: any): void {
    this.usersService.saveUser (id).subscribe (
      res => {
        console.log (res);
      });
  }

  getUser (id: any): void {
    this.usersService.getUser (id).subscribe (
      res => {
        console.log (res);
      });
  }

  ngOnDestroy (): void {
    this.subscription?.forEach (item => {
      item.unsubscribe ();
    });
  }

  private initializeReloadSubscription (): void {
    this.subject$.pipe (
      tap (() => (this.isLoading = true)),
      switchMap (() => {
        return this.usersService.getUsers (this.defaultPageOptions)
          .pipe (shareReplay (1), delay (this.randomNumber));
      }),
    ).subscribe (value => {
      this.isLoading = false;
      console.log (value);
    });
  }
}
