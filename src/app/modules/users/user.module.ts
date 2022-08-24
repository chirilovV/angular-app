import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UserPageComponent} from "./pages/userPage/user-page.component";
import {UserListItemComponent} from "./components/user-list-item/user-list-item.component";


@NgModule({
  declarations: [
    UserPageComponent,
    UsersListComponent,
    UserListItemComponent,
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    MatChipsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ]
})
export class UserModule {
}
