import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./modules/home/pages/home-page.component";
import {NewsPageComponent} from "./modules/news/pages/news-page/news-page.component";
import {CarsPageComponent} from "./modules/cars/pages/cars-page/cars-page.component";

import {UsersPageComponent} from "./modules/users/pages/user-page/users-page.component";
import {PageNotFoundComponent} from "./modules/core/components/not-found-404/page-not-found.component";
import {NewUserPageComponent} from "./modules/users/pages/new-user-page/new-user-page.component";
import {AppRouteEnum} from "./modules/core/Enums/appRouteEnum";
import {EditUserPageComponent} from "./modules/users/pages/edit-user-page/edit-user-page.component";

const routes: Routes = [
  {path: AppRouteEnum.Home, component: HomePageComponent},
  {path: AppRouteEnum.News, component: NewsPageComponent},
  {path: AppRouteEnum.Users, component: UsersPageComponent},
  {path: AppRouteEnum.Cars, component: CarsPageComponent},
  {path: AppRouteEnum.NewUser, component: NewUserPageComponent},
  {path: AppRouteEnum.EditUser, component: EditUserPageComponent},
  {path: AppRouteEnum.Default, redirectTo: AppRouteEnum.Home, pathMatch: 'full'},
  {path: AppRouteEnum.Error404, component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
