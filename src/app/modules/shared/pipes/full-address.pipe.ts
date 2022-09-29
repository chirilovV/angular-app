import {Pipe, PipeTransform} from '@angular/core';
import {Address} from '../../users/models/address.interface';

@Pipe({
  name: 'fullAddress'
})
export class FullAddressPipe implements PipeTransform {

  transform(contact: Address): string {
    let city = contact.city ? `, City: ${contact.city},` : '';
    let zip = contact.zip ? `Zip: ${contact.zip}` : '';

    return `Address: ${contact.addressLine} ${city} ${zip}.`;
  }

}
