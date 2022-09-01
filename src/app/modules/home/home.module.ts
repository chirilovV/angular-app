import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./pages/home-page.component";
import {SharedModule} from "../shared/shared.module";
import {AboutBannerComponent} from "./components/about-banner/about-banner.component";



@NgModule({
  declarations: [
    HomePageComponent,
    AboutBannerComponent
  ],
  exports: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule { }
