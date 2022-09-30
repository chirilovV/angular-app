import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './pages/user-details/user-details.component';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';
import {CompanyInfoComponent} from './components/company-info/company-info.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {AppRouteEnum} from '../core/Enums/appRouteEnum';

const routes: Routes = [{
  path: '',
  component: UserDetailsComponent,
  title: 'User Profile',
  children: [
    {
      path: AppRouteEnum.ProfileInfo,
      component: PersonalInfoComponent,
      title: 'Personal info',
    },
    {
      path: AppRouteEnum.CompanyInfo,
      component: CompanyInfoComponent,
      title: 'Company info',
    },
    {
      path: AppRouteEnum.UserContacts,
      component: ContactsComponent,
      title: 'Contacts',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthUserRoutingModule {
}
