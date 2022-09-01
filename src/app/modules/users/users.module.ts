import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {UsersFavoriteListComponent} from "./components/users-favorite-list/users-favorite-list.component";
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {UsersPageComponent} from "./pages/user-page/users-page.component";
import {UserCreationFormComponent} from "./components/user-creation-form/user-creation-form.component";
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';

@NgModule({
  declarations: [
    UsersPageComponent,
    UsersListComponent,
    UsersFavoriteListComponent,
    UserCreationFormComponent,
    NewUserPageComponent
  ],
  exports: [
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    MatChipsModule,
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
  ]
})
export class UsersModule {
}
