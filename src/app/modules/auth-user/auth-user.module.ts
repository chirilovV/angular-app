import {NgModule} from '@angular/core';
import {AuthUserRoutingModule} from './auth-user-routing.module';
import {CompanyInfoComponent} from './components/company-info/company-info.component';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    CompanyInfoComponent,
    PersonalInfoComponent,
    ContactsComponent
  ],

  imports: [
    AuthUserRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    CommonModule,
    SharedModule,
  ],

  exports: [
    AuthUserRoutingModule
  ]
})
export class AuthUserModule {
}
