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
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FullNamePipe} from './pipes/full-name.pipe';
import {AgePipe} from './pipes/age.pipe';
import {FullAddressPipe} from './pipes/full-address.pipe';


@NgModule({
  declarations: [
    ListItemComponent,
    WelcomeComponent,
    AddressItemComponent,
    PaginatorComponent,
    TimerComponent,
    ConfirmDialogComponent,
    FullNamePipe,
    AgePipe,
    FullAddressPipe,
  ],
  exports: [
    ListItemComponent,
    WelcomeComponent,
    AddressItemComponent,
    PaginatorComponent,
    ConfirmDialogComponent,
    FullNamePipe,
    AgePipe,
    FullAddressPipe,
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
    MatPaginatorModule,
    MatDialogModule,
  ]
})
export class SharedModule {
}
