import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "../pages/home/home-page.component";
import {NewsPageComponent} from "../pages/news/news-page.component";
import {PageNotFoundComponent} from "../pages/not-found-404/page-not-found.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
