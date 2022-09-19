import {Injectable} from '@angular/core';
import {User} from '../models/user.interface';
import {FormGroup} from '@angular/forms';
import {Address} from '../models/address.interface';
import {GenderEnum} from '../../core/Enums/gender.enum';

@Injectable ({
  providedIn: 'root'
})
export class UserDataPreparationService {

  private defaultAvatarPath = ' assets/img/defaultUserAvatar.png';

  constructor () { }

  createNewUser (userForm: any) {
    let newUser: User = {
      age: 0,
      company: '',
      department: '',
      email: '',
      firstName: '',
      gender: GenderEnum.NotSpecified,
      id: '',
      imageUrl: '',
      lastName: ''
    };

    newUser = this.addUserPersonalInformation (newUser, userForm);
    newUser = this.addAddresses (newUser, userForm);

    return newUser;
  }

  addUserPersonalInformation (user: User, userForm: any): User {
    let userData = userForm.controls.user.controls;

    user.age = userData.age.value;
    user.company = userData.company.value;
    user.department = userData.department.value;
    user.email = userData.email.value;
    user.firstName = userData.firstName.value;
    user.gender = userData.gender.value;
    user.imageUrl = user.imageUrl ? user.imageUrl : this.defaultAvatarPath;
    user.lastName = userData.lastName.value;
    user.id = user.id ? user.id : Math.random ().toString (16).slice (2);

    return user;
  }

  addAddresses (user: User, userForm: any): User {
    let addressesData: FormGroup[] = userForm.controls.addresses.controls;
    let addresses: Address[] = [];

    if (0 !== addressesData.length) {
      addressesData.forEach ((address) => {
          addresses.push ({
            addressLine: address.controls['addressLine'].value,
            city: address.controls['city'].value,
            zip: address.controls['zip'].value,
          });
        }
      );
    }

    user.addresses = addresses;

    return user;
  }
}
