import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersListComponent} from './components/users-list/users-list.component';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import {UsersFavoriteListComponent} from './components/users-favorite-list/users-favorite-list.component';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {UsersPageComponent} from './pages/user-page/users-page.component';
import {NewUserPageComponent} from './pages/new-user-page/new-user-page.component';
import {UsersRouting} from './users.routing';
import {UserFormShellComponent} from './components/user-form-shell/user-form-shell.component';
import {UserSearchComponent} from './components/user-search/user-search.component';
import {UserAddressesComponent} from './components/user-addresses/user-addresses.component';
import {UserFormControlsComponent} from './components/user-form-controls/user-form-controls.component';
import {EditUserPageComponent} from './pages/edit-user-page/edit-user-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule ({
  declarations: [
    UsersPageComponent,
    UsersListComponent,
    UsersFavoriteListComponent,
    UserFormControlsComponent,
    NewUserPageComponent,
    UserFormShellComponent,
    UserSearchComponent,
    UserAddressesComponent,
    EditUserPageComponent,
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModule,
    MatDividerModule,
    RouterModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    UsersRouting,
    MatSnackBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],

})
export class UsersModule {
}
