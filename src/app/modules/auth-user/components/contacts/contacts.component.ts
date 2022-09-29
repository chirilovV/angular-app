import {Component, OnInit} from '@angular/core';
import {LocalUsersService} from '../../../users/services/local-users-service';
import {Address} from '../../../users/models/address.interface';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts!: Address[];

  constructor(private usersService: LocalUsersService,) { }

  ngOnInit(): void {
    this.getContactData();
  }

  getContactData(): void {
    this.usersService.getUserById('a5').subscribe(
      response => {
        this.contacts = response.addresses;
      }
    );
  }

}
