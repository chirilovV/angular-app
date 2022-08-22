import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "../pages/home/home-page.component";
import {NewsPageComponent} from "../pages/news/news-page.component";
import {PageNotFoundComponent} from "../pages/not-found-404/page-not-found.component";
import {AddCarComponent} from "../cars/components/add-car/add-car.component";
import {UsersComponent} from "../users/components/users/users.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'cars', component: AddCarComponent},
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
