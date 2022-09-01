import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsPageComponent} from "./pages/news-page/news-page.component";
import {SharedModule} from "../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {ArticleComponent} from "./components/article/article.component";



@NgModule({
  declarations: [
    NewsPageComponent,
    ArticleComponent
  ],
  exports:[
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
  ]
})
export class NewsModule { }
