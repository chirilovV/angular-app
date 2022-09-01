import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {PageNotFoundComponent} from "./components/not-found-404/page-not-found.component";


@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule
  ]
})
export class CoreModule { }
