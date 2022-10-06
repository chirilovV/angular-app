import {Component, Input} from '@angular/core';
import {Address} from '../../models/address.interface';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Input() contacts!: Address[];
}