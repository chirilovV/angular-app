import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home/home-page.component';
import {NewsPageComponent} from './pages/news/news-page.component';
import {PageNotFoundComponent} from './pages/not-found-404/page-not-found.component';
import {AppRoutingModule} from "./modules/routingModule";
import {AboutBannerComponent} from "./pages/home/about-banner/about-banner.component";
import {ArticleComponent} from "./pages/news/article/article.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";


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
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
