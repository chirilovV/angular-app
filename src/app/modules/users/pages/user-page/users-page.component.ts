import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user.interface";
import {Subscription, take} from "rxjs";

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loader: boolean = true;
  usersSubscription: Subscription | undefined;
  favoritesSubscription: Subscription | undefined;

  constructor(private usersService: UsersService) {
  };

  ngOnInit(): void {
    this.getAllUsers();
  };

  get favorites(): User[] {
    let favoriteUsers: User[] = [];
    this.favoritesSubscription = this.usersService.getFavorites().subscribe(items => {
      favoriteUsers = items;
    });

    return favoriteUsers;
  }

  getAllUsers(): void {
    this.loader = true;
    this.usersSubscription = this.usersService.getUsers().subscribe(
      items => {
        this.users = items;
        this.loader = false;
      },
    );
  }

  toggleFavorites(user: User): void {
    user.isFavorite = !user.isFavorite;
    this.usersService.toggleFavorites(user.id);
  }

  search(keyword: string): void {
    this.loader = true;
    this.users = [];

    this.usersService.findUserByName(keyword).pipe(take(1)).subscribe(
      items => {
        this.users = items;
        this.loader = false;
      },
    );
  }

  ngOnDestroy(): void {
    this.usersSubscription?.unsubscribe();
    this.favoritesSubscription?.unsubscribe()
  }
}
