import {NgModule} from '@angular/core';
import {UsersListComponent} from './components/users-list/users-list.component';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {UserFormShellComponent} from './components/user-form-shell/user-form-shell.component';
import {UserSearchComponent} from './components/user-search/user-search.component';
import {UserAddressesComponent} from './components/user-addresses/user-addresses.component';
import {UserFormControlsComponent} from './components/user-form-controls/user-form-controls.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {UsersFavoriteListComponent} from './components/users-favorite-list/users-favorite-list.component';
import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {UsersPageComponent} from './pages/user-page/users-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UserDetailsComponent} from '../auth-user/pages/user-details/user-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {AuthUserModule} from '../auth-user/auth-user.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersFavoriteListComponent,
    UserFormControlsComponent,
    NewUserPageComponent,
    UserFormShellComponent,
    UserSearchComponent,
    UserAddressesComponent,
    EditUserPageComponent,
    UsersPageComponent,
    UserFormShellComponent,
    UserDetailsComponent,
  ],

  imports: [
    UsersRoutingModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule,
    AuthUserModule
  ],

})
export class UsersModule {
}
