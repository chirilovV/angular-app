import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthHeaderComponent} from './components/header/auth-header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {PageNotFoundComponent} from './components/not-found-404/page-not-found.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import {MatMenuModule} from '@angular/material/menu';
import {DefaultHeaderComponent} from './components/default-header/default-header.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AuthHeaderComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    DefaultHeaderComponent
  ],
  exports: [
    AuthHeaderComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    DefaultHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class CoreModule {}
