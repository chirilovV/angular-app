import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/pages/home-page.component';
import {NewsPageComponent} from './modules/news/pages/news-page/news-page.component';
import {PageNotFoundComponent} from './modules/core/components/not-found-404/page-not-found.component';
import {AppRouteEnum} from './modules/core/Enums/appRouteEnum';
import {CanDeactivateGuard} from './modules/users/gurads/can-deactivate-guard.service';
import {RegisterPageComponent} from './modules/authentication/pages/register-page/register-page.component';
import {LoginPageComponent} from './modules/authentication/pages/login-page/login-page.component';
import {AuthGuardService} from './modules/core/guards/authGuardService';
import {UserDetailsComponent} from './modules/users/pages/user-details/user-details.component';
import {DefaultPageComponent} from './modules/default/pages/default-page/default-page.component';
import {DefaultGuardService} from './modules/core/guards/defaultGuardService';

const routes: Routes = [
  {
    path: AppRouteEnum.Register,
    component: RegisterPageComponent,
    title: 'Register',
    canActivate: [DefaultGuardService]
  },
  {
    path: AppRouteEnum.Login,
    component: LoginPageComponent,
    title: 'Login',
    canActivate: [DefaultGuardService]
  },
  {
    path: AppRouteEnum.Home,
    component: HomePageComponent,
    title: 'Home',
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.UserDetails,
    component: UserDetailsComponent,
    title: 'Profile',
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.News,
    component: NewsPageComponent,
    title: 'News',
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.Users,
    loadChildren: () => import('./modules/users/users.module').then(
      m => m.UsersModule
    ),
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.Cars,
    loadChildren: () => import('./modules/cars/cars.module').then(
      m => m.CarsModule
    ),
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.Default,
    component: DefaultPageComponent,
    title: 'Welcome'
  },
  {
    path: AppRouteEnum.Error404,
    component: PageNotFoundComponent,
    title: 'Error 404'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard
  ],
})

export class AppRoutingModule {
}
