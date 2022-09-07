import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./modules/shared/shared.module";
import {CoreModule} from "./modules/core/core.module";
import {HomeModule} from "./modules/home/home.module";
import {NewsModule} from "./modules/news/news.module";
import {CarsModule} from "./modules/cars/cars.module";
import {UsersModule} from "./modules/users/users.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    UsersModule,
    CarsModule,
    SharedModule,
    CoreModule,
    HomeModule,
    NewsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
