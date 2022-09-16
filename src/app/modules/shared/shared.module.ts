import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemComponent} from './components/list-item/list-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {AddressItemComponent} from './components/address-item/address-item.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {TimerComponent} from './components/timer/timer.component';


@NgModule ({
  declarations: [
    ListItemComponent,
    WelcomeComponent,
    AddressItemComponent,
    PaginatorComponent,
    TimerComponent,
  ],
  exports: [
    ListItemComponent,
    WelcomeComponent,
    AddressItemComponent,
    PaginatorComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class SharedModule {
}
