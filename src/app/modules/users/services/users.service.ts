import {Injectable} from '@angular/core';
import {User} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  users = [
    {
      name: 'Jon Smith',
      age: 17,
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

  getUsers(): User[] {
    return this.users;
  }

  deactivateAll(status: boolean) {
    this.users.forEach(user => {
      user.isActivated = !status;
    })
  }
}
