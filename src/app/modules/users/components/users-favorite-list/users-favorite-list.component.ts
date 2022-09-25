import {Component, Input} from '@angular/core';
import {User} from '../../models/user.interface';

@Component({
  selector: 'users-favorite-list',
  templateUrl: './users-favorite-list.component.html',
  styleUrls: ['./users-favorite-list.component.scss']
})
export class UsersFavoriteListComponent {
  @Input() favorites!: User[];

  constructor() {
  }
}
