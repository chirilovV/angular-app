import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {UserInfoComponent} from "./components/user-info/user-info.component";
import {UsersComponent} from "./components/users/users.component";


@NgModule({
  declarations: [
    UsersComponent,
    UserInfoComponent,
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
