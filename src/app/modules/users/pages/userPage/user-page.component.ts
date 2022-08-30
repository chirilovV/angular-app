import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {

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
    this.usersService.toggleFavorites(user.id)
  }
}
