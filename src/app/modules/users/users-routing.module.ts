import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRouteEnum} from '../core/Enums/appRouteEnum';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {LoggedOnlyLayoutComponent} from '../shared/components/logged-only-layout/logged-only-layout.component';
import {UsersPageComponent} from './pages/user-page/users-page.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';
import {CompanyInfoComponent} from './components/company-info/company-info.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedOnlyLayoutComponent,
    title: 'Users',
    children: [
      {
        path: 'all',
        component: UsersPageComponent
      },
      {
        path: AppRouteEnum.NewUser,
        component: NewUserPageComponent,
        title: 'Add new NewUser'
      },
      {
        path: AppRouteEnum.EditUser,
        component: EditUserPageComponent,
        title: 'Edit NewUser'
      },
      {
        path: AppRouteEnum.UserDetails,
        component: UserDetailsComponent,
        children: [
          {
            path: AppRouteEnum.ProfileInfo,
            component: PersonalInfoComponent,
            title: 'Personal info'
          },
          {
            path: AppRouteEnum.CompanyInfo,
            component: CompanyInfoComponent,
            title: 'Company info'
          },
          {
            path: AppRouteEnum.UserContacts,
            component: ContactsComponent,
            title: 'Contacts'
          }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule {
}
