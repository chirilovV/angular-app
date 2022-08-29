import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {UserListItemComponent} from "../user-list-item/user-list-item.component";
import {User} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'users-favorite-list',
  templateUrl: './users-favorite-list.component.html',
  styleUrls: ['./users-favorite-list.component.scss']
})
export class UsersFavoriteListComponent implements OnInit {
  @Input() favorites!: User[];
  @ViewChildren('favorites') usersItems!: QueryList<UserListItemComponent>;
  actionDisplay = 'hidden'


  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getFavoriteCars();
  }

  ngDoCheck() {
    this.getFavoriteCars();
  }

  getFavoriteCars() {
    this.favorites = this.usersService.getFavorites();
  }

}
