import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component ({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input () users!: any[];
  @Output () addInFavoritesList = new EventEmitter ();

  constructor () {
  };
}
