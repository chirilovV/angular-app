import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../models/user.interface";

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {

  @Input() users!: User[];

  constructor(private usersService: UsersService) {
  };

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  };

  get favorites(): User[] {
    return this.usersService.getFavorites();
  }

  toggleFavorites(user: User) {
    user.isFavorite = !user.isFavorite
    this.usersService.toggleFavorites(user.id)
  }
}
