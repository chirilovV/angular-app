import {Injectable} from '@angular/core';
import {User} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      name: 'Jon Smith',
      age: 17,
      isActivated: true,
      imagePath: 'assets/img/avatar1.png'
    },
    {
      name: 'Ana Maria',
      age: 27,
      isActivated: true,
      imagePath: 'assets/img/avatar2.png'
    }, {
      name: 'Ion Popes',
      age: 15,
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
      isActivated: true,
      imagePath: 'assets/img/avatar5.png'
    },
  ];

  constructor() {
  }

  getUsers(): User[] {
    return this.users;
  };
}
