import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {WelcomeComponent} from "./modules/shared/components/welcome/welcome.component";
import {HomePageComponent} from "./modules/home/pages/home-page.component";
import {PageNotFoundComponent} from "./modules/core/components/not-found-404/page-not-found.component";
import {NewsPageComponent} from "./modules/news/pages/news-page/news-page.component";
import {ArticleComponent} from "./modules/news/components/article/article.component";
import {AboutBannerComponent} from "./modules/home/components/about-banner/about-banner.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {UserModule} from "./modules/users/user.module";
import {CarModule} from "./modules/cars/car.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./modules/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomePageComponent,
    NewsPageComponent,
    PageNotFoundComponent,
    AboutBannerComponent,
    ArticleComponent,
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
    UserModule,
    CarModule,
    SharedModule
  ],
  providers: [],
  exports: [
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
