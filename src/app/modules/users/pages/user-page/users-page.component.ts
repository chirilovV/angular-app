import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {User} from '../../models/user.interface';
import {Subject, Subscription} from 'rxjs';
import {PaginatorComponent} from '../../../shared/components/paginator/paginator.component';
import {PageOptions} from '../../../shared/models/pageOptions';
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
  reloadSubject$: Subject<any>;
  excelSubject$: Subject<any>;

  @Output () updateTotals = new EventEmitter ();
  @ViewChild (PaginatorComponent) paginator!: PaginatorComponent;

  private randomNumber = Math.floor (Math.random () * (6000 - 1000 + 1)) + 1000;


  constructor (
    private usersService: UsersResourceService,
    private favoriteUser: FavoriteUsersService
  ) {
    this.reloadSubject$ = this.usersService.reloadSubject$;
    this.excelSubject$ = this.usersService.excelSubject$;
  };

  get favorites (): User[] {
    let favoriteUsers: User[] = [];
    this.subscription.push (this.favoriteUser.getFavorites ().subscribe (items => {
      favoriteUsers = items;
    }));

    return favoriteUsers;
  }

  ngOnInit (): void {
    this.getAllUsers ();
  };

  getAllUsers (pageOptions?: PageOptions): void {
    this.isLoading = true;
    this.subscription.push (
      this.usersService.getUsers (pageOptions)
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
    this.reloadSubject$.next (this.randomNumber);
  }

  downloadExcel (id: any): void {
    this.excelSubject$.next (id);

//    this.usersService.downloadExcel (id).subscribe (
//      res => {
//        console.log (res);
//      });
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
}
