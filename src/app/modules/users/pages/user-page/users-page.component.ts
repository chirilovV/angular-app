import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {User} from '../../models/user.interface';
import {concatMap, exhaustMap, mergeMap, of, Subject, Subscription, switchMap, tap} from 'rxjs';
import {PaginatorComponent} from '../../../shared/components/paginator/paginator.component';
import {PageOptions} from '../../../shared/models/pageOptions';
import {FavoriteUsersService} from '../../services/favorite-users.service';
import {UsersApiService} from '../../services/users-api.service';
import {delay} from 'rxjs/operators';
import {Utils} from '../../../shared/services/utils.service';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: any[] = [];
  isLoading: boolean = false;
  totalItems: number = 0;
  subscription: Subscription[] = [];
  reloadSubject$: Subject<void> = new Subject<void>();
  excelSubject$: Subject<number> = new Subject<number>();
  saveSubject$: Subject<number> = new Subject<number>();
  getUserSubject$: Subject<number> = new Subject<number>();

  @Output() updateTotals = new EventEmitter();
  @ViewChild(PaginatorComponent) paginator!: PaginatorComponent;


  constructor(
    private usersService: UsersApiService,
    private favoriteUser: FavoriteUsersService,
    private utils: Utils
  ) {
    this.initializeReloadSubscription();
    this.initializeExcelSubscription();
    this.initializeSaveSubscription();
    this.initializeGetSubscription();
  };

  get favorites(): User[] {
    let favoriteUsers: User[] = [];
    this.subscription.push(this.favoriteUser.getFavorites().subscribe(items => {
      favoriteUsers = items;
    }));

    return favoriteUsers;
  }

  ngOnInit(): void {
    this.getAllUsers();
  };

  getAllUsers(pageOptions?: PageOptions): void {
    this.isLoading = true;
    this.subscription.push(
      this.usersService.getUsers(pageOptions)
      .subscribe(
        response => {
          this.totalItems = response.total_count;
          this.users = response.items;
          this.isLoading = false;

          if(this.paginator) {
            this.paginator.length = response.total_count;
          }
        },
      )
    );
  }

  search(keyword: string): void {
    this.isLoading = true;
    this.users = [];

    this.subscription.push(this.usersService.search(keyword).subscribe(
      response => {
        this.totalItems = response.total_count;
        this.users = response.items;
        this.isLoading = false;

        if(this.paginator) {
          this.paginator.length = response.total_count;
        }
      },
    ));
  }

  toggleFavorites(user: User): void {
    user.isFavorite = !user.isFavorite;
    this.favoriteUser.toggleFavorites(user.id);
  }


//  getUser(id: any): void {
//    this.usersService.getUser(id).subscribe(
//      res => {
//        console.log(res);
//      });
//  }

  ngOnDestroy(): void {
    this.subscription?.forEach(item => {
      item.unsubscribe();
    });
  }

  ////////////////////////////////////////////////////

  refresh(): void {
    this.reloadSubject$.next();
  }

  getExcel(id: number): void {
    this.excelSubject$.next(id);
  }

  saveUser(id: number): void {
    this.saveSubject$.next(id);
  }

  getUser(id: number): void {
    this.getUserSubject$.next(id);
  }

  private initializeReloadSubscription(): void {
    this.reloadSubject$.pipe(
      tap(() => console.log(`Start to reload`)),
      switchMap(() => {
        return this.usersService.getUsers().pipe(delay(this.utils.generateRandomNumber(1000, 6000)));
      }),
    ).subscribe(response => {
      console.log(`End to reload`, ' ==== ', response);
      return response;
    });
  }

  private initializeExcelSubscription(): void {
    this.excelSubject$.pipe(
      tap((id) => console.log(`Start excel ${id}`)),
      mergeMap((id) => {
        return of(`${id}`,).pipe(delay(this.utils.generateRandomNumber(600, 1000)));
      }),
    ).subscribe(response => {
      console.log(`END excel`, response);
    });
  }

  private initializeSaveSubscription(): void {
    this.saveSubject$.pipe(
      tap((id) => console.log(`Download START ${id}`)),
      concatMap((id) => {
        return of(`${id}`,).pipe(delay(this.utils.generateRandomNumber(600, 1000)));
      }),
    ).subscribe(response => {
      console.log(`Download END`, response);
    });
  }

  private initializeGetSubscription(): void {
    this.getUserSubject$.pipe(
      tap((id) => console.log(`Get user START ${id}`)),
      exhaustMap((id) => {
        return this.usersService.getUser(id.toString());
      }),
    ).subscribe(response => {
      console.log(`Get user END`, response);
    });
  }
}
