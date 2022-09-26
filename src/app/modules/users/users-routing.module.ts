import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from './pages/user-page/users-page.component';
import {AppRouteEnum} from '../core/Enums/appRouteEnum';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
    title: 'Users'
  },
  {
    path: AppRouteEnum.NewUser,
    component: NewUserPageComponent,
    title: 'Add new User'
  },
  {
    path: AppRouteEnum.EditUser,
    component: EditUserPageComponent,
    title: 'Edit User'
  },
  {
    path: AppRouteEnum.UserDetails,
    component: UserDetailsComponent,
    title: 'User Profile'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule {
}
