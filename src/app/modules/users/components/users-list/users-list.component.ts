import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component ({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input () users!: any[];
  @Output () addInFavoritesEvent = new EventEmitter ();
  @Output () downloadExcelEvent = new EventEmitter ();
  @Output () saveUserEvent = new EventEmitter ();
  @Output () getUserEvent = new EventEmitter ();

  constructor () {
  };
}
