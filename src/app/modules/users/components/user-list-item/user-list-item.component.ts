import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() user!: User;

  constructor() {};

  ngOnInit(): void {
  };
}
