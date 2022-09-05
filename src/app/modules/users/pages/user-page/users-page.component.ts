import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user.interface";

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users: User[] = [];
  loader: boolean = true;

  constructor(private usersService: UsersService) {
  };

  ngOnInit(): void {
    this.getAllUsers();
  };

  getAllUsers(): void {
    this.loader = true;
    this.usersService.getUsers().subscribe(
      items => {
        this.users = items;
        this.loader = false;
      },
    );
  }

  get favorites(): User[] {
    let favoriteUsers: User[] = [];
    this.usersService.getFavorites().subscribe(items => {
      favoriteUsers = items;
    });

    return favoriteUsers;
  }

  toggleFavorites(user: User): void {
    user.isFavorite = !user.isFavorite;
    this.usersService.toggleFavorites(user.id);
  }

  search(keyword: string): void {
    this.loader = true;
    this.users = [];

    this.usersService.findUserByName(keyword).subscribe(
      items => {
        this.users = items;
        this.loader = false;
      },
    );
  }
}
