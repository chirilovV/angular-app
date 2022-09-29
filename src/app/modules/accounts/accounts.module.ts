import {NgModule} from '@angular/core';
import {RegisterPageComponent} from './pages/register/register-page/register-page.component';
import {LoginPageComponent} from './pages/login/login-page/login-page.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent
  ],

  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    MatButtonModule,
    RouterModule,
//    SharedModule,
//    ReactiveFormsModule,
//    MatFormFieldModule,
//    MatInputModule,
//    CommonModule,
//    MatButtonModule,
//    RouterModule
  ],

})
export class AccountsModule {
}
