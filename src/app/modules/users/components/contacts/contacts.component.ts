import {Component} from '@angular/core';
import {Address} from '../../models/address.interface';
import {LocalUsersService} from '../../services/local-users-service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts: Address[] = [];

  constructor(private usersService: LocalUsersService) {
  }

  public ngOnInit(): void {
    this.usersService.getUserById('1').subscribe(response => {
      if(response && response.addresses) {
        this.contacts = response.addresses;
      }
    });
  }
}
