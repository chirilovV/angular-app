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
import { AboutBannerComponent } from './pages/home/about-banner/about-banner.component';
import { ArticleComponent } from './pages/news/article/article.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomePageComponent,
    NewsPageComponent,
    PageNotFoundComponent,
    AboutBannerComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
