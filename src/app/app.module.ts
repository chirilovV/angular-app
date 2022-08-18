import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {NewsPageComponent} from './pages/news/news-page.component';
import {PageNotFoundComponent} from './pages/not-found-404/page-not-found.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./modules/routingModule";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomePageComponent,
    NewsPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
