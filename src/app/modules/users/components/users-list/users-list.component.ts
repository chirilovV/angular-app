import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/user.interface";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users!: User[];
  @Output() addInFavoritesList = new EventEmitter();

  constructor() {
  };
}
