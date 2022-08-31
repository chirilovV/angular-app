import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemComponent} from "./components/list-item/list-item.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ListItemComponent,
    HeaderComponent,
  ],
  exports: [
    ListItemComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class SharedModule { }
