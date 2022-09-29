import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './pages/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    title: 'User Profile',
  },
  {
    path: 'user-details/profile-info',
    loadChildren: () => import('./components/personal-info/personal-info.component')
    .then(m => m.PersonalInfoComponent),
    title: 'Personal Info',
  },
  {
    path: 'user-details/company-info',
    loadChildren: () => import('./components/company-info/company-info.component')
    .then(m => m.CompanyInfoComponent),
    title: 'Company Info',
  },
  {
    path: 'user-details/contacts',
    loadChildren: () => import('./components/contacts/contacts.component')
    .then(m => m.ContactsComponent),
    title: 'Contacts Info',
  }
  ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthUserRoutingModule {
}
