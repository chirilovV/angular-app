import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  pageName: string | undefined

  constructor() {
  }

  ngOnInit(): void {
    this.pageName = 'Users'
  }


}
