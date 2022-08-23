import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddCarComponent} from "./modules/cars/components/add-car/add-car.component";
import {HomePageComponent} from "./modules/home/pages/home-page.component";
import {NewsPageComponent} from "./modules/news/pages/news-page/news-page.component";
import {UserPageComponent} from "./modules/users/pages/userPage/user-page.component";
import {PageNotFoundComponent} from "./modules/core/components/not-found-404/page-not-found.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'users', component: UserPageComponent},
  {path: 'cars', component: AddCarComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
