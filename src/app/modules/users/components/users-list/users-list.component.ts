import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users!: User[];

  constructor(private userService: UsersService) {
  };

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  };

}
