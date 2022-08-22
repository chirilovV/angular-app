import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  users: User[] | undefined
  isShow: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.users = [
      {
        name: 'Jon Smith',
        age: 20,
        isActivated: true,
        imagePath: 'assets/img/avatar1.png'
      },
      {
        name: 'Ana Maria',
        age: 27,
        isActivated: false,
        imagePath: 'assets/img/avatar2.png'
      }, {
        name: 'Ion Popes',
        age: 22,
        isActivated: true,
        imagePath: 'assets/img/avatar3.png'
      }, {
        name: 'Gina Bush',
        age: 37,
        isActivated: false,
        imagePath: 'assets/img/avatar4.png'
      }, {
        name: 'George Duct',
        age: 67,
        isActivated: false,
        imagePath: 'assets/img/avatar5.png'
      }, {
        name: 'Carl Marks',
        age: 41,
        isActivated: true,
        imagePath: 'assets/img/avatar6.png'
      },
    ]
  }

  updateStatus(user: User) {
    user.isActivated = !user.isActivated
  }

  toggleDisplay() {
    this.isShow = !this.isShow
  }

  hidde(isActive: boolean) {
    return this.isShow && !isActive
  }
}
