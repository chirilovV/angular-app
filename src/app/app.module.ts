import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './modules/core/core.module';
import {HomeModule} from './modules/home/home.module';
import {NewsModule} from './modules/news/news.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './modules/shared/shared.module';
import {AuthModule} from './modules/auth/auth.module';
import {DefaultPageComponent} from './modules/default/pages/default-page/default-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    SharedModule,
    CoreModule,
    HomeModule,
    NewsModule,
    HttpClientModule,
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
